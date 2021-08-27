import lipids from "../assets/lipids.svg";
import proteins from "../assets/proteins.svg";
import carbohydrates from "../assets/carbohydrates.svg";
import calories from "../assets/calories.svg";

/**
 * @const {array} keyDatasParameters - Parameters for KeyDatas like unit, icone, color...
 */
export const keyDatasParameters = [
    {
      name: "calorieCount",
      title: "Calories",
      unit: "Cal",
      icone: calories,
      color: "#FF0000",
    },
    {
      name: "proteinCount",
      title: "Protéines",
      unit: "g",
      icone: proteins,
      color: "#4AB8FF",
    },
    {
      name: "carbohydrateCount",
      title: "Glucides",
      unit: "g",
      icone: carbohydrates,
      color: "#FDCC0C",
    },
    {
      name: "lipidCount",
      title: "Lipides",
      unit: "g",
      icone: lipids,
      color: "#FD5181",
    },
  ];