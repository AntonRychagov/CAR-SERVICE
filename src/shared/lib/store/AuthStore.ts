// import { makeAutoObservable } from "mobx";
// import { auth, db } from "../firebase/firebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// class AuthStore {
//   isLoading = false;
//   error = "";
//   token = "";
//   isAuthenticated: boolean;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   async register(email: string, password: string) {
//     this.isLoading = true;
//     this.error = "";
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       await this.addUserToFirestore(user.uid, email);
//     } catch (error: any) {
//       this.error = this.getErrorMessage(error);
//     } finally {
//       this.isLoading = false;
//     }
//   }

//   async login(email: string, password: string) {
//     this.isLoading = true;
//     this.error = "";
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       const idToken = await user.getIdToken();

//       this.token = idToken;
//     } catch (error: any) {
//       this.error = this.getErrorMessage(error);
//     } finally {
//       this.isLoading = false;
//     }
//   }

//   async addUserToFirestore(uid: string, email: string) {
//     try {
//       await setDoc(doc(db, "users", uid), {
//         email: email,
//         createdAt: new Date(),
//       });
//     } catch (error: any) {
//       console.error("Ошибка при добавлении пользователя в Firestore:", error);
//     }
//   }

//   private getErrorMessage(error: any): string {
//     switch (error.code) {
//       case "auth/email-already-in-use":
//         return "Этот электронный адрес уже используется.";
//       case "auth/invalid-email":
//         return "Неверный адрес электронной почты.";
//       case "auth/operation-not-allowed":
//         return "Операция не разрешена.";
//       case "auth/weak-password":
//         return "Пароль слишком простой.";
//       case "auth/user-disabled":
//         return "Учетная запись пользователя отключена.";
//       case "auth/user-not-found":
//         return "Пользователь не найден.";
//       case "auth/wrong-password":
//         return "Неверный пароль.";
//       default:
//         return "Произошла неизвестная ошибка.";
//     }
//   }
// }

// export default new AuthStore();


import { makeAutoObservable } from "mobx";
import { auth, db } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

class AuthStore {
  isLoading = false;
  error = "";
  token = "";
  user: User | null = null;
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  async register(email: string, password: string) {
    this.setLoading(true);
    this.setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      this.user = user;
      this.isAuthenticated = true;
      await this.addUserToFirestore(user.uid, email);
    } catch (error: any) {
      this.setError(this.getErrorMessage(error));
    } finally {
      this.setLoading(false);
    }
  }

  async login(email: string, password: string) {
    this.setLoading(true);
    this.setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      this.user = user;
      this.isAuthenticated = true;
      const idToken = await user.getIdToken();
      this.setToken(idToken);
    } catch (error: any) {
      this.setError(this.getErrorMessage(error));
    } finally {
      this.setLoading(false);
    }
  }

  async logout() {
    this.setLoading(true);
    this.setError("");
    try {
      await signOut(auth);
      this.user = null;
      this.token = "";
      this.isAuthenticated = false;
    } catch (error: any) {
      this.setError("Ошибка при выходе из системы: " + error.message);
    } finally {
      this.setLoading(false);
    }
  }

  private async addUserToFirestore(uid: string, email: string) {
    try {
      await setDoc(doc(db, "users", uid), {
        email: email,
        createdAt: new Date(),
      });
    } catch (error: any) {
      console.error("Ошибка при добавлении пользователя в Firestore:", error);
    }
  }

  private getErrorMessage(error: any): string {
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

  private setLoading(value: boolean) {
    this.isLoading = value;
  }

  private setError(message: string) {
    this.error = message;
  }

  private setToken(token: string) {
    this.token = token;
  }
}

export default new AuthStore();
