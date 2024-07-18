import { makeAutoObservable } from "mobx";
import axios from "axios";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface FirebaseError {
  code: string;
  message: string;
}

class AuthStore {
  isLoading = false;
  error = "";
  token = "";

  constructor() {
    makeAutoObservable(this);
  }

  async register(email: string, password: string): Promise<void> {
    this.isLoading = true;
    this.error = "";
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await this.login(email, password);
    } catch (error: unknown) {
      this.error = this.getErrorMessage(error as FirebaseError);
    } finally {
      this.isLoading = false;
    }
  }

  async login(email: string, password: string): Promise<void> {
    this.isLoading = true;
    this.error = "";
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      const data = response.data;
      if (data.token) {
        this.token = data.token;
      } else {
        this.error = data.error;
      }
    } catch (error: unknown) {
      this.error = this.getErrorMessage(error as FirebaseError);
    } finally {
      this.isLoading = false;
    }
  }

  private getErrorMessage(error: FirebaseError): string {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "Этот электронный адрес уже используется.";
      case "auth/invalid-email":
        return "Неверный адрес электронной почты.";
      case "auth/operation-not-allowed":
        return "Операция не разрешена.";
      case "auth/weak-password":
        return "Пароль слишком простой.";
      case "auth/user-disabled":
        return "Учетная запись пользователя отключена.";
      case "auth/user-not-found":
        return "Пользователь не найден.";
      case "auth/wrong-password":
        return "Неверный пароль.";
      default:
        return "Произошла неизвестная ошибка.";
    }
  }
}

export default new AuthStore();
