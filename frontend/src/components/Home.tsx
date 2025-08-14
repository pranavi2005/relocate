import React from "react";
import Header from "./Header";
import "../App.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <Header />
      <Button
              variant="contained"
              style={{ position: "absolute", top: 20, right: 20 }}
              onClick={() => navigate("/signin")}
            >
              Login
            </Button>
      <main className="main-content">
        <section className="left-container">
          <h2 className="welcome-title">Welcome to Reloc8</h2>
          <p className="description">
            Reloc8 makes buying, selling, and settling effortless for busy professionals...
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
