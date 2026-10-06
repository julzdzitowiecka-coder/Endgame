import Confetti from "react-confetti";
import type { JSX } from "react";

export default function ConfettiComponent({ isGameWon }: { isGameWon: boolean }): JSX.Element {
    return (
        <>
            {isGameWon && (
                <Confetti
                    recycle={false}
                    numberOfPieces={1000}
                />
            )}
        </>
    );
}