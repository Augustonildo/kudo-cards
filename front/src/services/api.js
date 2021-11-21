import apiProvider from "./provider";

export default class Api {
  getKudos() {
    let barramento = `/kudos`;
    return apiProvider.get(barramento);
  }

  postKudos(body) {
    let barramento = `/kudos`;
    return apiProvider.post(barramento, body);
  }
}
