import { useState } from "react";
import { languages } from "./languages";
import { getRandomWord } from "./utils";
import Header from "./components/Header";
import StatusClass from "./components/StatusClass";
import ConfettiComponent from "./components/Confetti";
import AriaLiveStatus from "./components/AriaLiveStatus";
import LanguageChips from "./components/LanguageChips";
import WordLetters from "./components/WordLetters";
import NewGameButton from "./components/NewGameButton";
import Keyboard from "./components/Keyboard";


export default function AssemblyEndgame() {
    // State values
    const [currentWord, setCurrentWord] = useState<string>(():string => getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    // Derived values
    const numGuessesLeft:number = languages.length - 1;
    const wrongGuessCount:number = guessedLetters.filter((letter:string):boolean => !currentWord.includes(letter)).length;
    const isGameWon:boolean = currentWord.split("").every((letter:string):boolean => guessedLetters.includes(letter));
    const isGameLost:boolean = wrongGuessCount >= numGuessesLeft;
    const isGameOver:boolean = isGameWon || isGameLost;
    const lastGuessedLetter:string = guessedLetters[guessedLetters.length - 1];
    const isLastGuessIncorrect: boolean = !!lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function addGuessedLetter(letter:string):void {
        setGuessedLetters((prevLetters:string[]):string[] =>
          prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        );
    }

    function startNewGame():void {
        setCurrentWord(getRandomWord());
        setGuessedLetters([]);
    }

    return (
        <main>
            <ConfettiComponent isGameWon={isGameWon} />
            <Header />
            <StatusClass
                isGameWon={isGameWon}
                isGameLost={isGameLost}
                isGameOver={isGameOver}
                isLastGuessIncorrect={isLastGuessIncorrect}
                wrongGuessCount={wrongGuessCount}
            />

            <LanguageChips
                languages={languages}
                wrongGuessCount={wrongGuessCount}
            />

            <WordLetters
                currentWord={currentWord}
                guessedLetters={guessedLetters}
                isGameLost={isGameLost}
            />

            {/* Combined visually-hidden aria-live region for status updates */}
            <AriaLiveStatus
                currentWord={currentWord}
                lastGuessedLetter={lastGuessedLetter}
                numGuessesLeft={numGuessesLeft}
                guessedLetters={guessedLetters}
            />
            <Keyboard
                alphabet={alphabet}
                guessedLetters={guessedLetters}
                currentWord={currentWord}
                isGameOver={isGameOver}
                addGuessedLetter={addGuessedLetter}
            />

            <NewGameButton
                  isGameOver={isGameOver}
                  startNewGame={startNewGame}
              />
      </main>
    );
}
