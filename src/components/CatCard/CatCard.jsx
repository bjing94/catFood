import React from "react";
import { useState } from "react";
import Typography from "../Typography";

import "./CatCard.css";

const Tip = ({ text, onBuy, selected, disabled, taste }) => {
  return (
    <Typography className="card__tip" textAlign="center" fontSize={13}>
      {!disabled ? (
        selected ? (
          text
        ) : (
          <span>
            {"Чего сидишь? Порадуй котэ, "}
            <span className="card__link" onClick={onBuy}>
              купи.
            </span>
          </span>
        )
      ) : (
        ""
      )}
      {disabled && `Печалька ${taste} закончился.`}
    </Typography>
  );
};

const Feature = ({ amount, text }) => {
  return (
    <Typography fontSize={14} className="card__feature">
      {amount && <span style={{ fontWeight: "bold" }}>{amount}</span>} {text}
    </Typography>
  );
};

export default function CatCard({
  weight = 0.5,
  title = "Нямушка",
  taste = "с фуа-гра",
  featureTop: featureTopText = "Сказочное заморское яство",
  features = [
    {
      amount: 10,
      text: " порций",
    },
    {
      amount: null,
      text: "мышь в подарок",
    },
  ],
  tip = "Чего сидишь? Порадуй котэ, купи.",
  disabled = false,
  selected = false,
  onBuy,
}) {
  const [featureTop, setFeatureTop] = useState(featureTopText);
  const featureElements = features.map((feature) => {
    return (
      <Feature
        key={`feature-${Math.random() * 150}`}
        amount={feature.amount}
        text={feature.text}
      />
    );
  });

  const handleBuy = () => {
    if (selected) {
      setFeatureTop(featureTopText);
    }
    onBuy();
  };

  return (
    <div
      className={`card__root ${disabled ? "disabled" : ""} ${
        selected ? "selected" : ""
      }`}
    >
      <div
        className="card__container"
        onClick={handleBuy}
        onMouseEnter={() => {
          if (selected) {
            setFeatureTop("Котэ не одобряет?");
          }
        }}
        onMouseLeave={() => {
          setFeatureTop(featureTopText);
        }}
      >
        <div className="card">
          <Typography fontSize={16} className="card__feature-top">
            {featureTop}
          </Typography>
          <Typography fontSize={48} lineHeight={40}>
            {title}
          </Typography>
          <Typography fontSize={24} className="card__taste">
            {taste}
          </Typography>
          {featureElements}
          <div className="card__circle">
            <Typography fontSize={42}>{weight}</Typography>
            <Typography fontSize={21} lineHeight={8}>
              кг
            </Typography>
          </div>
        </div>
        <div className="card__overlay" />
      </div>
      <Tip
        text={disabled ? `Печалька ${taste} закончился.` : tip}
        onBuy={handleBuy}
        selected={selected}
        disabled={disabled}
        taste={taste}
      />
    </div>
  );
}
