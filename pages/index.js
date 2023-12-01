import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../src/components/dashboard/SalesChart";
import Feeds from "../src/components/dashboard/Feeds";
import ProjectTables from "../src/components/dashboard/ProjectTable";
import TopCards from "../src/components/dashboard/TopCards";
import Blog from "../src/components/dashboard/Blog";
import bg1 from "../src/assets/images/bg/bg1.jpg";
import bg2 from "../src/assets/images/bg/bg2.jpg";
import bg3 from "../src/assets/images/bg/bg3.jpg";
import bg4 from "../src/assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quadra Admin</title>
        <meta
          name="Quadra Admin"
          content="Quadra Admin"
        />
        <link rel="icon" href="/logoQuadra.png" />
      </Head>
      <div>
        {/***Top Cards***/}
        <Row>

        <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Ingresos Totales"
              subtitle="Ingresos Totales"
              earning="$5k"
              icon="bi bi-coin"
            />
          </Col>
          
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="Número total de cocheras"
              subtitle= "Número total de cocheras"
              earning="2k"
              icon="bi-truck"
            />
          </Col>
        
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="Total Clientes"
              subtitle="Total Clientes"
              earning="1.5k"
              icon="bi-people"
            />
          </Col>
          
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Cocheras reservadass"
              subtitle="Cocheras reservadas"
              earning="1k"
              icon="bi-calendar-check"
            />
          </Col>
        </Row>
        {/***Sales & Feed***/}
        <Row>
          <Col sm="12" lg="12">
            <SalesChart />
          </Col>
        </Row>
        {/***Table ***/}
        <Row>
          <Col lg="6" xxl="8" sm="12">
            <ProjectTables />
          </Col>
        </Row>
        
        
      </div>
    </div>
  );
}
