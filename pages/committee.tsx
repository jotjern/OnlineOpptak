import type { NextPage } from "next";
import { BaseSyntheticEvent } from "react";
import Whentomeet from "../components/committee/whentomeet";
import styles from "../styles/committee.module.css";

interface Interview {
  day: string;
  time: string;
}

const Committee: NextPage = () => {
  let markedCells: Interview[] = [];
  let committee: string = "";
  let password: string = "";

  function removeCell(cell: string[]) {
    var x: Interview = { day: cell[0], time: cell[1] };
    markedCells.splice(markedCells.indexOf(x), 1);
  }
  function addCell(cell: string[]) {
    var x: Interview = { day: cell[0], time: cell[1] };
    markedCells.push(x);
  }

  function resetCells() {
    markedCells = [];
  }

  function updateCommittee(e: BaseSyntheticEvent) {
    committee = e.target.value;
  }
  function updatePassword(e: BaseSyntheticEvent) {
    password = e.target.value;
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <header className="text-center">
        <h2 className="text-5xl font-bold mt-5 mb-6">
          Legg inn ledige tider for intervjuer
        </h2>
      </header>

      <div>
        <p className="text-center text-lg mt-5 mb-6">
          Velg ledige tider ved å trykke på eller dra over flere celler.
          <br></br>Intervjuene vil bli satt opp etter hverandre fra første
          ledige tid.
        </p>
      </div>
      <form
        className="text-center"
        style={{ width: "300px", margin: "0 auto" }}
      >
        <div style={{ margin: "0 auto 15px" }}>
          <label
            htmlFor="first_name"
            className="block mb-2 mt-4 text-m font-medium text-black"
          >
            Komité
          </label>
          <select
            onChange={(e) => {
              updateCommittee(e);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {["Arrkom",	"Appkom",	"Bedkom",	"Dotkom",	"Fagkom",	"Online IL",	"Prokom",	"Trikom",	"Realfagskjelleren"].map((c) => {
              return (
                <option key={c} value={c.toLowerCase()}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>{" "}
        <div style={{ margin: "0 auto" }}>
          <label className="block mb-2 text-m font-medium text-black">
            Passord
          </label>

          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Passord"
            required
          ></input>
        </div>
        <label className="block mb-2 mt-5 text-m font-medium text-black">
          Fyll ut ledige tider før du sender.
        </label>
        <button
          type="submit"
          onChange={(e) => {
            updatePassword(e);
          }}
          className="text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Lagre og send
        </button>
      </form>
      <header className="text-center">
        <h2 className="text-2xl font-bold mt-5 mb-6">Uke 34?</h2>
      </header>

      <Whentomeet
        resetCells={() => resetCells()}
        removeCell={(cell: string[]) => removeCell(cell)}
        addCell={(cell: string[]) => addCell(cell)}
      />
    </div>
  );
};

export default Committee;