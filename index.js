import express from "express";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";

const app = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

app.get("/holidays", (req, res) => {
    res.send(holidays);
})

app.get("/holidays/:month", (req, res) => {
    const id = req.params.month;
    const holidaysThisMonth = [];
    
    for (let i = 0 ; i < holidays.length ; i ++) {
        let date = holidays[i].date.split("/");
        const holidayMonth = date[0];

        if (holidayMonth === id) holidaysThisMonth.push(holidays[i]);
    }

    res.send(holidaysThisMonth);
})

app.get("/is-today-holidays", (req, res) => {
    const currentDate = dayjs().locale('pt-br').format("M/D/YYYY");
    let message;

    for (let i = 0 ; i < holidays.length ; i ++) {
        if (holidays[i].date === currentDate) {
            message = `Sim, hoje é ${holidays[i].name}`;
            break;
        }

        if (i === holidays.length - 1) message = "Não, hoje não é feriado";
    }

    res.send(message);
})

app.listen(5000);