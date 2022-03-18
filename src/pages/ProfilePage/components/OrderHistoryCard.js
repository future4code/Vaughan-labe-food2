import React from "react";
import { Typography } from "@mui/material";
import { OrderCard } from "./Styled";
import moment from "moment";

export default function OrderHistoryCard(props) {
  let date = new Date(props.date);

  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let momentDate = moment.utc(date).format(`DD MM YYYY`);
  const momentDateArr = momentDate.split(" ");
  let monthNumber = Number(momentDate.split(" ")[1]);
  let monthName = months[monthNumber - 1];

  momentDateArr[1] = monthName;

  return (
    <OrderCard>
      <Typography
        color={"primary"}
        sx={{ m: "16px 0 0 16px", fontWeight: "600" }}
      >
        {props.name}
      </Typography>
      <Typography sx={{ ml: "16px", fontSize: "12px" }}>
        {momentDateArr.join(" ")}
      </Typography>
      <Typography sx={{ ml: "16px", fontWeight: "600" }}>
        Total: R${props.price.toFixed(2).replace(".", ",")}
      </Typography>
    </OrderCard>
  );
}
