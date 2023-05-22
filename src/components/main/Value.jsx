import Card from "./Card";
// import data from "./data";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/user");

  return res.json();
};

const Value = () => {
  function createCard(item) {
    console.log({ item });

    return (
      <Card
        key={item.key}
        image={item.image}
        title={item.title}
        desc={item.desc}
      />
    );
  }

  const { data, status } = useQuery("people", fetchData);
  console.log(data);

  return (
    <section id="values" class="values">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Why to participate</h2>
          <p>Benefits</p>
        </header>

        <div class="row" style={{ height: "620px" }}>
          {data?.map(createCard)}
        </div>
      </div>
    </section>
  );
};

export default Value;
