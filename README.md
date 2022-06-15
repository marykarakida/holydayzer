# holydayzer

### Descrição

Nesta prática você deve desenvolver um *back-end* de calendário de feriados!

- Array de feriados deste ano
    
    OBS: As datas estão no padrão americano: Mês/Dia/Ano
    
    ```jsx
    const holidays = [
      { date: "1/1/2022", name: "Confraternização mundial" },
      { date: "3/1/2022", name: "Carnaval" },
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
    ```
    

### Back-end

- **GET** `/holidays`
    
    Deve retornar a lista de feriados.
    
- **GET** `/is-today-holiday`
    
    Deve retornar `“Sim, hoje é nome-do-feriado”` quando o dia de hoje for feriado e `“Não, hoje não é feriado”` caso contrário
    

### Bônus

- **Bônus:** Feriados do mês
    
    Deverá ser possível consultar a lista de feriados de todos os 12 meses, seguindo o formato abaixo.
    
    **GET** `/holidays/1` - janeiro
    
    **GET** `/holidays/2` - fevereiro
    
    **GET** `/holidays/3` - março
    
    ...
    
    **GET** `/holidays/12` - dezembro
