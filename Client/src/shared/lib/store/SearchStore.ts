import { makeAutoObservable } from "mobx";
import { SearchStoreInterface } from "../../types";

class SearchStore implements SearchStoreInterface {
  searchTerm: string = "";
  showError: boolean = false;
  rootStore: any;

  constructor(rootStore: any) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setSearchTerm = (term: string) => {
    this.searchTerm = term;
  };

  setShowError = (show: boolean) => {
    this.showError = show;
  };

  handleSearch = (availableServices: string[], navigate: any) => {
    const searchTermTrimmed = this.searchTerm.trim().toLowerCase();
    if (searchTermTrimmed === "") {
      this.showError = false;
      return;
    }
    const serviceExists = availableServices.some(
      (service) => service.toLowerCase() === searchTermTrimmed
    );
    if (serviceExists) {
      navigate(`/search?query=${this.searchTerm}`);
      this.searchTerm = ""; // Очищаем поле ввода после поиска
      this.showError = false; // Сбрасываем ошибку
    } else {
      this.showError = true;
    }
  };
}

export default SearchStore;
