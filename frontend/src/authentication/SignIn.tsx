import React from "react";
import {
  TextField,
  Button,
  Box,
  Divider,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";

const SignIn: React.FC = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Card
          sx={{
            width: 400,
            padding: 2,
            boxShadow: 3,
            backgroundColor: "black",
            color: "white",
          }}
        >
          <CardHeader
            title="Welcome"
            subheader="Please sign in to continue"
            sx={{
              textAlign: "center",
              color: "white",
              "& .MuiCardHeader-subheader": {
                color: "white",
              },
            }}
          />
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    px: 3,
                  }}
                >
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALQAwAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAEDBAL/xABHEAABAwICBQcHCAkDBQAAAAABAAIDBAUGEQcSITFRE0FhcYGR0SIjMmKhscEUFUJSVXKT8AgWJENUgpKioyVTsjVjwsPh/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAgMGAf/EADERAAICAQIEAwYFBQAAAAAAAAABAgMEESEFMUFREhOBIiMyYbHRFEJx4fAVM1Khwf/aAAwDAQACEQMRAD8Ao1ERAEREAREQBFOcFaML7ikR1LmfN9udtFTO3a8eoze7r2DpV3YV0a4aw2GSRUYq6xu35TVgPcDxaNzewZ9KA18sGBcTYgDX260zmFwzE8o5OMjiHOyz7M1PbXoHuEgDrteqaD1KaJ0vtOrl7Ve6ICsKTQdhmINNRV3KocN4MrGtPYG5+1ZWLRDgpjcnWuSQ8XVUvwcFOkQEFl0Q4Ke3JtrkjPFtVL8XFYms0HYZlDjTVdyp3H0fOsc0dhbn7VaCICiLroHuEYLrTeaao9SpidF7RrZ+xQG/4FxNYA59xtM4haMzPEOUjA4lzc8u3JbaogNJ0W0+KdGmGsRh8klGKOsdt+U0gDHE8XDc7tGfSqQxrowvuFg+pDPl9ubtNTA05sHrt3t69o6UBB0REAREQBERAEREARF6LfQ1VzrYaKggfPUzuDI42Da4/nnQHzR0lRXVUVLRwvnqJXasccbc3OPQFfujvRFSWlsVxxMyOruGWs2lOTooT0/Xd7B07Cs9o10fUeDqITThlRd5m+eqMtjB9RnAdPP3ATdAEREAREQBF5am40VKSKirgjI5nSAHuXhfiiysO2ub2McfcFi5xXNm2NFs94xb9DMIsOzFFlfurm9rHD3he6muVDVECnrIJHH6LZBn3IpxfJiVFsN5Ra9D1IiLI1BERAVRpE0RUl1bLccMMjpK/LWdSjJsU3V9R3sPRtKoSspaihqpaWshkgqInaskcjcnNPAhbpKD6StH1HjCiM8AZT3eFvmZ8shIPqP4jgd47wQNX0XouFFU22tmoq6F8FTA8skjeNrSF50AREQBERAFshoewC3DdubdbnF/q9UzMNcNtNGfo/ePP3cxzr3Qdg8Xu9OvVdHrUNueDGCNkk28DqbsJ6S3pWxSAIiIAhIaCXEADeSumsq4KKmfUVMgZGwbSVXOIMR1N2eY4yYaQHZGDtd0u8FqttjWt+ZNxMKzJltsu5JbxjGkpC6KhaKmUbNbPJg7efs71Ebhf7nXk8tVPaw/u4zqt9m/tWNXCr53TnzZ0uPgUULZavuwiLhaiaERDuQGRt9+udvI5CqeWD93IdZvcd3YphZsZUtUWxXBoppTs18/IPh+dqr1FshfOHJkPIwKL17S0fdF1AhwBBBB2ghFW+Fb9W0VTHRtY+pgkdkIhtc3pb+clZCsarVYtUcvmYksWfhk9ewXCItpEK20w4CbiK3Ou9si/wBWpGZlrRtqYx9H7w5u7hlrit11rrpvwcLHeheaGPVoLi8l4aNkU28jqdtI/m6EBWSIiALtpaeWrqYqamjMk0zxHGxu9zicgB2rqVj6CbELrjL5dMzWgtsRm2jMcodjB/ycPuoC+cIWGHDOHaK0wZHkI/OPH05Dtc7tOfZkswiIAvmWRkMbpJXBrGAlzjuAX0odj26OY2O3REgPGvKeI5h8e5YWTUI6skYuO8i1VowOI73Jd6vySW0sZ82z4npWHRcKqlJyerOzqqjVBQitkERS/D+EHTNbU3XWYw7WwDY4/e4dW9ewrlN6IwyMmvHj4rGRSCCaofqU8Ukr/qsaSfYsnFhi8yjNtC4D1ntb7yrLpaWnpIhFSwsiYOZgyXcpccRfmZR2cbnr7uK9SrpcL3mIZuonEeq9rvcVi6mnmpn8nUQyRP8AqvaWn2q5V1VNNBVxGKphZKw/ReM0liL8rFfG5p+8ivQppdlPBLUzshgYXyPOTWjnUsv+DXxnlrQC9hO2Ana3qPOFn8NYfis8HKSZPq3jy3/V6AtEcabloywt4rRGnxwerfT7nGGsPxWeDlJMn1bx5b/q9AWcRFYxiorRHL22ztm5zerZwiIsjWFhsYWCHE2HK21TZAzR+aefoSDa13fl2ZrMogNLKmCWlqJaeojdHNE8skY7e1wORB7V1qxtOliFqxka2FmrBcoxNsGQ5QbHj3OP3lXKALYr9H+1CjwdNcHMykr6lxDuLGeSP7tfvWuq230d0baDA1jgYMv2OOQj1njXPtcUBIUREB8yPEbHPduaMyohXxsr9f5S3W1zn0jqUjvMnJ0LgN7yG/nuUeXLceyZK6FcXy39f59S0wI+FOfUilxtstE7WHlwnc8c3QV4VOHAOaWuAIIyII2FYl+HvlFbC2kOTJHgPad7Rzkdi14eerWq5/F9S+qy1p7wyGCbE14bc6tmYB8ww/8ALwU2XxDEyCJkUTQ1jGhrQOYBfa6mutQjojlsrJlkWucvT9AiIthGCLx/O1t+0KT8dvinztbftCk/Hb4rPy59mY+OPc9iLx/O1t+0KT8dvinztbftCk/Hb4p5c+zHjj3PYi8fztbftCk/Hb4rj52tv2hSfjt8U8ufZjxx7nsReP52tv2hSfjt8V62uDmhzSC0jMEc68cZR5o9Uk+RyiIsT0rD9IC1CrwhBcGszkoKlpLuEb/JP92otd1trpFom1+Bb5A8Z5UckgHrMGuPa0LUpAFuhboBTW+mp27oomMHYAFpet1onB8bHN3FoIQH0iIgMVf3ZRwt4kn896wqzGIN0B+98Fh1w/GW/wAbP0+iLnE/soLI2NmtVlx+iwrHLKWE/tEg4s+K1cMSeZXr3M8l6VSM2iIu9KMIiICnERF2ZzwRFwUAKBcBcleg4KtawycrZaJ538i0HsGSqlWjhj/oNFn/ALfxKqeLL3cX8ydg/GzJoiKhLM89xgFTb6qB26WF7D2ghaYLdWVwZE9x3BpO1aVIAtxcMVPyzDVpqjvmooZO9gK06W0ehu4i46Pbbm7Wkptenf0arjqj+ktQE1REQGNvrM6ZjvqvWCUorouXpJIxvIzHWFF1x/HqnHJU/wDJfT+ItsGWtenYLvt9ZFSV8IleG8qdQA8+f/3JYi43OOkzjjyfNw5m9aj0s8s0vKyPJfx4LDhuDY5xulsluvn+xA4jxWupOqG8uvZfuXAixmHro2625kuY5Znkyt4O49qya7JPVaojRkpRUkERF6ZFa/qtev4P/KzxT9Vr1/B/5WeKspFZ/wBVu7L/AH9yH+Br7srX9Vr1/B/5WeK4/VW9fwY/FZ4qyljMR14t1pmkzykeNSP7x8Np7FnDieROSikt/wBfuYyw6opttlYEZbOC+UKK+KwK17JFyNnomHeIW59eSq6jgdVVcNO3fK8N7yrda0NaGtGQAyAVNxee0Ylhgx3bOURFSFiYzFFSaPDN3qhvhoppB2MJWna2h0y3EW/R9csn6slTqU7OnWcNYf0hy1eQBXX+jneAHXWySO36tXE3ua//ANapRZ7A1+dhrFVvumZ5KOTVnA543bHbOfYcx0gIDbpF8xvbIxr43BzHAFrgcwRxX0gCg2LpprfVmKFuoyYazZPeApysZiG1Nu1vdFsEzPKidwPDqKjZGNC5JyWrW6MLZWquSrejZVxOZzJzJXC+pY3wyOjlaWvYcnNO8FfKjnNnvs11ntNYJ4fKadkkZOx4Vl2y5UtzpxNSyaw+k0+k08CFUq7qSrqKKYTUsropBztPv4rZXa4bdCXjZUqdnui30ULt+N3NaGXGm1v+5FvPYfFZiLFtnkG2odGeD43fAKSrIPqWkMqmS+Izi4WEkxXZmDZVF54Nid4LF1uOIgCKGle53M6U5DuC9dkF1PZZNMeciU1dVBRwOnqZBHG3eSq2xDeZLvV6wzbBHsiYfeekry3C61lxl5SrlLxzM3Nb1BeYtBGsw5jnHOFa8Jtx3Pf4+mv/AD5ldfl+b7MdkfKIvqGJ80rIoml8jyGtaN5K6LkRiR4FoPlFydVvHm6duz7x3ezP2KfrwWK2ttVujphkX+lI4c7jv8Oxe9crmX+dc5Ll0LvHr8utLqERfMj2RRukkcGMYC5znHIADeVFNxSn6Rd4BfarJG70Q6qlb/az/wA1SqzuOL8cS4puF0zPJSyZQg7Mo27G7ObYAT0krBIAiIgNjNBmKxeMO/M9VJnW20BrcztfD9E/y+j/AE8VZi09wrf6vDN9pbrRHy4XeWzPISMPpNPWO7YeZbZWG80d/tFNc7c/Xp6hmsM97TztPSDsKAyCIiAjeKsOi4tNXRgCraPKbuEg8VX72uY8se0tc05EEZEFXIsLfsO0t2aZB5mqA2SAb+hw51osq13RX5WH4/bhzK0zXGa910tFba5NWriIaT5MjdrXdq8CitNcyplFxejCIi8PAiLhAco0lpzaciuF6qC31Vwm5KkhdI7nIGxvWeZFrrsEm3ojqAEno+n9Xj1eCneEcPmhaK2tZ+0uHkMP7seK7sPYXgthbUVJE1UNxy8lnV09KkKu452RKjy5v166Fxi4rj7VnMIiKMTwqz054rFnw98zUsmVbcgWvyO1kP0j/N6PVrcFPL/eKOwWipudxk1KenZrHLe48zR0k7AtTsU36rxLfKq61p8uZ3kszzEbB6LR0Ad+/nQGJREQBERAFOtFmPJMIXMwVbnvtFU4cuwbeSdu5Ro945x1BQVEBunS1ENXTRVNLKyWCVofHIw5tc07iCuxaz6NNJFVhKUUVdr1Nne7Mxg5ugJ3uZ0cW+7bnsbarlRXegirrbUx1FNKM2SMOw+B6DtCA9aIiA4exkjCyRrXNOwtcMwVgLhhC21RLoQ+mef9s+T3H4ZKQIvHFS5mE64TWklqQOpwRWsJ+TVMMo9bNp+K8L8JXlpybTNf0tlb8SrKRanRAiywKX3RWjcJXp2+la3rlb8CvZT4IuDyOXnp4m9BLj7vip+iKiAWBSu5GqHBdvgIdVPkqXDmPkt7ht9qkNPBDTRCKniZHGNzWDILsRbIxjHkiTCqFfwrQIiLI2BdVVUQ0dNLU1UrIoIml8kjzk1rRvJK6brc6Kz0EtdcqmOnpohm+R59g4noG0rXHSXpIq8XTGiotems7HZiInJ05G5z/g338wHVpSx5LjC5iGkc9lopnHkIzs5R27lHDjw4DrKgyIgCIiAIiIAiIgCkGEMYXjCVZy9rn808+dppMzHJ1jj0jao+iA2iwVpLseKWsg5UUVxOw0k7stY+o7c739Cmq0oU6wtpUxLh8MhkqBcaNuzkaslxA9V+8duYHBAbOoq2sOmjDVxa1lzE9smI28o0yR58A5u3tICnltvFsurC+2XClq2jeYJmvy68jsQHtREQBERAEXiuV4tlqYH3O4UtI07jPM1mfVmdqgd+00YatzXMtgnucwGzk2mOPPgXO29oBQFkqFY10mWPCzZIBIK65N2Clgd6J9d25vVtPQqWxVpUxLiAPhZUC30btnI0hLS4es/eezIHgoMgJBi/GF3xbW8vdJ/NMPmqaPZHF1Dj0nao+iIAiIgCIiAIiIAiIgCIiAIiIAuWucxwcxxa4biDkQiIDNUmL8S0YaKa/XJjW+iz5U8tHYTksrDpQxpC3Jl9lI9aGN3vaiIBNpQxpM3J99lA9WGNvuasVV4vxLWBwqL9cntd6TPlTw09gOS5RAYRznPcXPcXOO8k5krhEQBERAEREAREQBERAf/Z"
      alt="Google logo"
                    style={{ width: 20, height: 20 }}
                  />
                  Sign in with Google
                </Button>
              </Box>

              <Divider sx={{ my: 2, borderColor: "white", color: "white", '&::before, &::after': { borderColor: 'white' } }}>
                              Or
                          </Divider>
              <TextField
                required
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white" },
                  sx: {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />

              <TextField
                required
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white" },
                  sx: {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="Remember me"
                sx={{ color: "white" }}
              />

              <Button variant="contained" color="primary" type="submit" fullWidth>
                Sign In
              </Button>

              <Link
                to="/signup"
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  textDecoration: "none",
                  color: "#90caf9",
                }}
              >
                Don't have an account? Sign Up
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default SignIn;
