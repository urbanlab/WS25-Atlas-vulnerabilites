import { useState } from "react";
import "./App.css";
import { questions, questionIconMapping } from "./consts.js";
import carteLyon from "./assets/carte-lyon.svg";
import victoryIcon from "./assets/endofgame-win.svg";
import defeatIcon from "./assets/endofgame-defeat.svg";
import backgroundVideo from "./assets/atlas-vid-fond-jeu.mp4";
import startScreenIcon from "./assets/start-screen-icon.svg";

const ScaleBar = ({ score, orientation, isVulnerability = false }) => {
  // Ensure score is within the range of 0 to 100
  const clampedScore = Math.max(0, Math.min(100, score));
  const progressPercentage = `${clampedScore}%`;

  const progressColor = (score) => {
    if (isVulnerability) {
      if (score < 25) {
        return "#41AC48"; // Green
      } else if (score < 50) {
        return "#FFD500"; // Yellow
      } else if (score < 75) {
        return "#FF6A06"; // Orange
      } else {
        return "#E60028"; // Red
      }
    } else {
      if (score < 25) {
        return "#E60028"; // Red
      } else if (score < 50) {
        return "#FF6A06"; // Orange
      } else if (score < 75) {
        return "#FFD500"; // Yellow
      } else {
        return "#41AC48"; // Green
      }
    }
  };

  const containerStyle =
    orientation === "horizontal"
      ? "horizontal-scale-bar-container"
      : "vertical-scale-bar-container";

  const barFillStyle =
    orientation === "horizontal"
      ? "horizontal-scale-bar-fill"
      : "vertical-scale-bar-fill";

  const extraBarFillStyle =
    orientation === "horizontal"
      ? { width: progressPercentage, backgroundColor: progressColor(score) }
      : { height: progressPercentage, backgroundColor: progressColor(score) };

  return (
    <div
      className={containerStyle}
      style={{ borderColor: progressColor(score) }}
    >
      <div className={barFillStyle} style={extraBarFillStyle} />
    </div>
  );
};

function VerticalScaleBar({ score }) {
  return (
    <div className="vertical-scale-container">
      <ScaleBar
        score={score.vulnerabilite}
        orientation="vertical"
        isVulnerability={true}
      />
    </div>
  );
}

function HorizontalScaleBars({ score }) {
  return (
    <div className="horizontal-scale-container">
      <div className="horizontal-scale-item">
        Budget
        <ScaleBar score={score.financement} orientation="horizontal" />
      </div>
      <div className="horizontal-scale-item">
        Popularité
        <ScaleBar score={score.popularite} orientation="horizontal" />
      </div>
      <div className="horizontal-scale-item">
        Effets rebonds
        <ScaleBar score={score.effetRebond} orientation="horizontal" />
      </div>
    </div>
  );
}

function QuestionCard({ question, numberOfQuestions }) {
  return (
    <div className="window-container question-card-dimensions">
      <div className="window-blue-bar bold-text-28px">
        {`Dossier ${question.id}/${numberOfQuestions} ‧ ${question.categorie} `}
      </div>
      <div className="question-card-white-zone">
        <div className="question-card-text-container normal-text-28px">
          Question
          <div className="bold-text-28px">{question.question}</div>
        </div>
        <img
          src={questionIconMapping[question.id]}
          alt="icône de la categorie"
          className="question-card-icon"
        />
      </div>
    </div>
  );
}

function ChoiceCards({ question, onClick }) {
  return (
    <div className="card-container">
      <button
        className="choice-card normal-text-24px"
        onClick={() => onClick(question.choixA)}
      >
        Choix A<div className="bold-text-24px">{question.choixA.text}</div>
      </button>
      <button
        className="choice-card normal-text-24px"
        onClick={() => onClick(question.choixB)}
      >
        Choix B<div className="bold-text-24px">{question.choixB.text}</div>
      </button>
      <button
        className="choice-card normal-text-24px"
        onClick={() => onClick(question.choixC)}
      >
        Choix C<div className="bold-text-24px">{question.choixC.text}</div>
      </button>
    </div>
  );
}

function ChoiceFeedback({ onClick, selectedChoice }) {
  const formatNumber = (number) => (number > 0 ? `+${number}` : number);

  return (
    <div className="window-container feedback-card-dimensions">
      <div className="window-blue-bar bold-text-28px">Réponse</div>
      <div className="feedback-card-white-zone normal-text-28px">
        <div className="feedback-card-text-container">
          <ul className="feedback-card-blue-container normal-text-28px">
            <li className="bold-text-28px">Bilan</li>
            <li>{formatNumber(selectedChoice.scoreFinancement)}% Budget</li>
            <li>{formatNumber(selectedChoice.scorePopularite)}% Popularité</li>
            <li>
              {formatNumber(selectedChoice.scoreEffetRebond)}% Effet rebond
            </li>
            <li className="bold-text-28px">
              {formatNumber(selectedChoice.scoreVulnerabilite)}% Vulnérabilité
            </li>
          </ul>
          {selectedChoice.scoreImpact}
        </div>
        <button className="normal-text-28px" onClick={() => onClick()}>
          Continuer
        </button>
      </div>
    </div>
  );
}

function EndOfGame({ isVictory, restartGame }) {
  const gameResult = isVictory
    ? {
        icon: victoryIcon,
        color: "#41ac48",
        topBar: "La réélection en vue",
        mainTitle: "Ça sent bon la réélection !",
        subTitle: "Les vulnérabilités ont diminuées",
        text: "En même temps avec un tel charisme, elles ne pouvaient pas vous résister. Grâce au succès des actions que vous avez initiées, il semble bien que vous obteniez la majorité.",
      }
    : {
        icon: defeatIcon,
        color: "#e60028",
        topBar: "Fin de mandat immédiate",
        mainTitle: "Votre mandat est révoqué !",
        subTitle: "Les vulnérabilités ont gagné",
        text: "Désolé Monsieur l’ex Président, il semblerait que vous ayez échoué dans votre mission. En même temps, vous avez été confronté à la complexité des vulnérabilités. Mais l’essentiel, n’est-ce pas d’avoir essayé ?",
      };

  return (
    <div>
      <BackgroundVideo />

      <div
        className="window-container end-of-game-container-dimensions"
        style={{ borderColor: gameResult.color, color: gameResult.color }}
      >
        <div className="window-bar bold-text-28px">{gameResult.topBar}</div>
        <div className="end-of-game-white-zone bold-text-28px">
          <img src={gameResult.icon} alt="icon" />
          <div className="end-of-game-right-side-container">
            <h1>{gameResult.mainTitle}</h1>
            <h2>{gameResult.subTitle}</h2>
            <h3>{gameResult.text}</h3>
            <div className="end-of-game-button-wrapper">
              <button
                className="end-of-game-button"
                style={{
                  backgroundColor: gameResult.color,
                  color: "white",
                  borderColor: gameResult.color,
                }}
                onClick={() => restartGame()}
              >
                Repartir pour un mandat
              </button>
              <button
                className="end-of-game-button"
                style={{
                  backgroundColor: "transparent",
                  color: gameResult.color,
                  borderColor: gameResult.color,
                }}
                onClick={() =>
                  window.open(
                    "https://geoweb.grandlyon.com/portal/apps/storymaps/collections/7e7862ec92694601a7085074dcaf7481?item=1",
                    "_blank"
                  )
                }
              >
                Tout savoir sur les vulnérabilités
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    >
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function StartScreen({ startGame }) {
  return (
    <div>
      <BackgroundVideo />

      <div className="window-container start-screen-container-dimensions">
        <div className="window-blue-bar bold-text-28px">
          Objet: Bravo pour votre éléction !!!
        </div>
        <div className="start-screen-white-zone bold-text-28px">
          <img src={startScreenIcon} alt="icon" />
          <div className="end-of-game-right-side-container">
            <p>Bonjour nouveau‧elle Président‧e,</p>
            <p>
              Je n'ai pas réussi à faire assez baissé la vulnérabilité de la
              ville face à la chaleur mais nos supérieurs vous attendent au
              tournant.
            </p>
            <p>
              Afin de vous faciliter le travail, mon équipe vous a préparé un
              simulateur de vulnérabilités pour que vous puissiez vous projeter
              et voir les effets sur le territoire.
            </p>
            <p>
              Bonne chance nouveau‧elle Président‧e, de la part de votre
              prédécesseur.
            </p>
            <div className="end-of-game-button-wrapper">
              <button
                className="start-screen-button"
                onClick={() => startGame()}
              >
                Débuter mon mandat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const initialScoreState = () => {
  return {
    financement: 100,
    effetRebond: 0,
    popularite: 100,
    vulnerabilite: 65,
  };
};

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState(initialScoreState);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showChoiceFeedback, setShowChoiceFeedback] = useState(false);
  const [endOfGame, setEndOfGame] = useState({
    showEndOfGameScreen: false,
    isVictory: true,
  });
  const [showStartScreen, setShowStartScreen] = useState(true);

  const numberOfQuestions = questions.length;

  const normalizeScore = (score) => {
    return Math.max(0, Math.min(100, score));
  };

  const isGameOver = () => {   
    //Anywhere in the game
    if (
      score.financement <= 0 ||
      score.popularite <= 0 ||
      score.effetRebond >= 100 ||
      score.vulnerabilite >= 100
    ) {
      setEndOfGame({ showEndOfGameScreen: true, isVictory: false });
    }

    //After all questions
    if (questionNumber >= numberOfQuestions) {
      if (score.vulnerabilite < 50) {
        setEndOfGame({ showEndOfGameScreen: true, isVictory: true });
      } else {
        setEndOfGame({ showEndOfGameScreen: true, isVictory: false });
      }
    }
  };

  const handleChoiceClick = (choix) => {
    setShowChoiceFeedback(true);
    setSelectedChoice(choix);
    setScore({
      financement: normalizeScore(score.financement + choix.scoreFinancement),
      effetRebond: normalizeScore(score.effetRebond + choix.scoreEffetRebond),
      popularite: normalizeScore(score.popularite + choix.scorePopularite),
      vulnerabilite: normalizeScore(score.vulnerabilite + choix.scoreVulnerabilite),
    });
  };

  const handleCloseFeedback = () => {
    setShowChoiceFeedback(false);
    setQuestionNumber(questionNumber + 1);
    isGameOver();
    setCurrentQuestion(questions[questionNumber]);
  };

  const handleRestartGame = () => {
    setQuestionNumber(1);
    setScore(initialScoreState);
    setSelectedChoice(null);
    setCurrentQuestion(questions[0]);
    setEndOfGame({ showEndOfGameScreen: false, isVictory: false });
    setShowStartScreen(true);
  };

  return (
    <>
      {showStartScreen ? (
        <StartScreen startGame={() => setShowStartScreen(false)} />
      ) : (
        <>
          {endOfGame?.showEndOfGameScreen ? (
            <EndOfGame
              isVictory={endOfGame.isVictory}
              restartGame={handleRestartGame}
            />
          ) : (
            <>
              <div className="left-side">
                <HorizontalScaleBars score={score} />

                {showChoiceFeedback ? (
                  <ChoiceFeedback
                    onClick={handleCloseFeedback}
                    selectedChoice={selectedChoice}
                  />
                ) : (
                  <>
                    <QuestionCard
                      question={currentQuestion}
                      numberOfQuestions={numberOfQuestions}
                    />
                    <ChoiceCards
                      question={currentQuestion}
                      onClick={handleChoiceClick}
                    />
                  </>
                )}
              </div>

              <img
                src={carteLyon}
                alt="map"
                className="carte-lyon"
                style={{
                  filter: `saturate(${(score.vulnerabilite + 50) / 100})`,
                }}
              />

              <VerticalScaleBar score={score} />
            </>
          )}
        </>
      )}
    </>
  );
}
export default App;
