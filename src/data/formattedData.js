
/** Class to Format data get for MainData */
export class MainData {
  constructor(data) {
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.score = data.score || data.todayScore;
    this.keyDatas = data.keyData;
  }
}

/** Class to Format data get for ActivityData */
export class ActivityData {
  constructor(data) {
    this.sessionsActivity = data.sessions;
  }
}

/** Class to Format data get for PerformanceData */
export class PerformanceData {
  constructor(data) {
    this.data = data.data.map((dataElt) => ({
      kindKey: dataElt.kind,
      kindLabel: Object.entries(data.kind)
        .filter(([key]) => key === String(dataElt.kind))
        .map(([key, value]) => value)[0],
      value: dataElt.value,
    }));
  }
}

/** Class to Format data get for SessionsData */
export class SessionsData {
  constructor(data) {
    this.sessionsLength = data.sessions;
  }
}
