/**
 * DataModel class for formatting and managing user data.
 */
class DataModel {
  constructor(rawData) {
    this.rawData = rawData;
  }

  formatUserMainData() {
    const { id, userInfos, keyData } = this.rawData;
    const { score, todayScore } = this.rawData;
    const finalScore = todayScore || score;

    return {
      id,
      userInfos: {
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        age: userInfos.age,
      },
      todayScore: finalScore,
      keyData: {
        calorieCount: keyData.calorieCount,
        proteinCount: keyData.proteinCount,
        carbohydrateCount: keyData.carbohydrateCount,
        lipidCount: keyData.lipidCount,
      },
    };
  }


  formatActivityData() {
    const { userId, sessions } = this.rawData;
    return {
      userId,
      sessions: sessions.map((session) => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      })),
    };
  }

  formatAverageSessionsData() {
    const { userId, sessions } = this.rawData;
    return {
      userId,
      sessions: sessions.map((session) => ({
        day: session.day,
        sessionLength: session.sessionLength,
      })),
    };
  }

  formatPerformanceData() {
    const { userId, kind, data } = this.rawData;
    return {
      userId,
      kind,
      data: data.map((item) => ({
        value: item.value,
        kind: item.kind,
      })),
    };
  }
}

export default DataModel;
