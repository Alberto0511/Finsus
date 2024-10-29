import React, { useEffect } from "react";
import { message, Spin } from "antd";
import axios from "axios";
import Catalogs from "./catalog";
import Swal from "sweetalert";
import {
  DivElement,
  ClassLabelBodyOwner,
  SelectOwner,
  StyledSelect,
  StyledLabel,
  StyledInputOwner,
  ButtonDiv,
  ClassStyleButtonOwner,
  Row,
  Subtitle,
  Label,
  CenteredDiv,
  CubeDiv,
} from "./index.styles";

let modelSend = {
  company: "Finsus",
  source: "Web Page",
  campaign: "Propietarios",
  content: "Venta",
  propiedad: "",
  valor: "",
  estado: "",
  nombre: " ",
  apellidos: "",
  correo: "",
  telefono: "",
  medio: "",
  dia: "",
  horario: "",
};

let URLSEND = "https://api.beta.llavecredit.com/lead-put/";
//let URLSEND = "https://api.llavecredit.com/lead_put";
let URLSENDMAIL = "https://cpapiforms-58438daf6a11.herokuapp.com/cp/send-mail";
// let URLSENDMAIL = "http://localhost:3050/cp/send-mail";

function Summary(props) {
  // Agrega la clase "Summary" al body cuando el componente se monta
  React.useEffect(() => {
    const bodyElement = document.getElementById("body");
    if (bodyElement) {
      bodyElement.classList.add("Summary");
    }
  }, []); // [] asegura que solo se ejecute una vez cuando el componente se monta

  const [modelForme, setModelForme] = React.useState([
    {
      id: "kindProperty",
      label: "Tipo de propiedad en venta",
      type: "select",
      options: Catalogs.CatKindProperty,
      required: true,
      display: "none",
    },
    {
      id: "approximateValue",
      label: "Valor aproximado de la propiedad",
      type: "select",
      options: Catalogs.approximatevalue,
      required: true,
      display: "none",
    },
    {
      id: "propertyLocation",
      label: "Ubicación de la propiedad",
      type: "select",
      options: Catalogs.PropertyLocation,
      required: true,
      display: "none",
    },
    {
      id: "name",
      label: "¿Cuál es tu nombre?",
      type: "input",
      placeholder: "Nombre",
      required: true,
      display: "none",
    },
    {
      id: "lastName",
      label: "¿Cuáles son tus apellidos?",
      type: "input",
      placeholder: "Apellidos",
      required: true,
      display: "none",
    },
    {
      id: "email",
      label: "¿Cuál es tu correo?",
      type: "input",
      placeholder: "correo@dominio.com",
      required: true,
      display: "none",
    },
    {
      id: "phone",
      label: "¿Cuál es tu número telefónico?",
      type: "input",
      placeholder: "(00) 0000 0000",
      required: true,
      display: "none",
    },
    {
      id: "contactMedium",
      label: "¿Medio de Contacto Preferido?",
      type: "select",
      options: Catalogs.ContactMedium,
      required: true,
      display: "none",
    },
    {
      id: "day",
      label: "El día",
      type: "select",
      options: Catalogs.Day,
      required: true,
      display: "none",
    },
    {
      id: "schedule",
      label: "El horario",
      type: "select",
      options: Catalogs.schedule,
      required: true,
      display: "none",
    },
  ]);

  const [registerProperty, setRegisterProperty] = React.useState({
    kindProperty: "",
    approximateValue: "",
    propertyLocation: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    contactMedium: "",
    day: "",
    schedule: "",
  });
  const [random, setRandom] = React.useState(0);
  const [disableSend, setDisableSend] = React.useState(true);
  const [loadingSpin, setLoadingSpin] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  useEffect(() => {
    document.getElementById("validateClassError").style.display = "none";
    // let details = navigator.userAgent;
    // let regexp = /android|iphone|kindle|ipad/i;
    // let isMobileDevice = regexp.test(details);
    // setMobile(isMobileDevice)
  }, [modelForme]);

  const onChangeInput = (e, id) => {
    let value = e.target.value;
    let disabled = true;

    if (id === "phone") {
      let regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        setRegisterProperty({
          ...registerProperty,
          [id]: value,
        });
      }
    } else if (id === "name" || id === "lastName") {
      let regex = /^[a-zA-Z\s]*$/;
      if (regex.test(value)) {
        setRegisterProperty({
          ...registerProperty,
          [id]: value,
        });
      }
    } else if (id === "email") {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      if (regex.test(value)) {
        document.getElementById("validateClassError").style.display = "none";
        disabled = false;
        setDisableSend(disabled);
        setRegisterProperty({
          ...registerProperty,
          [id]: value,
        });
      } else {
        disabled = true;
        setDisableSend(disabled);
        document.getElementById("validateClassError").style.display = "block";
        setRegisterProperty({
          ...registerProperty,
          [id]: value,
        });
      }
    } else {
      setRegisterProperty({
        ...registerProperty,
        [id]: value,
      });
    }
  };

  const onChangeSelect = (e, id) => {
    setRegisterProperty({
      ...registerProperty,
      [id]: e,
    });
  };

  const validateRequiered = () => {
    let validate = true;
    let arrayIdsRequiere = [];
    modelForme.map((item, index) => {
      if (item.required) {
        if (registerProperty[item.id] === "") {
          arrayIdsRequiere.push(item.id);
          validate = false;
        }
      }
    });
    return { validate, arrayIdsRequiere };
  };

  const sentInfoDataAxios = async (modelSend) => {
    try {
      setLoadingSpin(true);
      const response = await axios.post(URLSEND, modelSend);
      if (response.status === 200) {
        const mailSend = await sendMailaAxios(modelSend);
        console.log("mailSend", mailSend);
        Swal("Información enviada correctamente", {
          icon: "success",
        });
        return "ok";
      } else {
        message.error({
          content: "Error al enviar la información",
          duration: 2,
        });
        return "error";
      }
    } catch (error) {
      console.log("error", error);
      message.error({
        content: "Error al enviar la información",
        duration: 2,
      });
      return "error";
    }
  };

  const sendMailaAxios = async (modelSend) => {
    try {
      let data = JSON.stringify({
        Data: modelSend,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: URLSENDMAIL,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          return "ok";
        })
        .catch((error) => {
          console.log(error);
          return "error";
        });
    } catch (error) {
      console.log("error", error);
      // message.error({
      //   content: "Error al enviar mail la información",
      //   duration: 2,
      // });
      return "error";
    }
  };

  const sendForm = async () => {
    let { validate, arrayIdsRequiere } = validateRequiered();

    if (validate) {
      modelForme.map((item, index) => {
        item.color = "none";
      });

      modelSend.propiedad =
        Catalogs.CatKindProperty[registerProperty.kindProperty - 1].label;
      modelSend.valor =
        Catalogs.approximatevalue[registerProperty.approximateValue - 1].label;
      modelSend.estado =
        Catalogs.PropertyLocation[registerProperty.propertyLocation - 1].label;
      modelSend.nombre = registerProperty.name;
      modelSend.apellidos = registerProperty.lastName;
      modelSend.correo = registerProperty.email;
      modelSend.telefono = registerProperty.phone;
      modelSend.medio =
        Catalogs.ContactMedium[registerProperty.contactMedium - 1].label;
      modelSend.dia = Catalogs.Day[registerProperty.day - 1].label;
      modelSend.horario =
        Catalogs.schedule[registerProperty.schedule - 1].label;

      let responseSend = await sentInfoDataAxios(modelSend);

      if (responseSend === "ok") {
        setRegisterProperty({
          kindProperty: "",
          approximateValue: "",
          propertyLocation: "",
          name: "",
          lastName: "",
          email: "",
          phone: "",
          contactMedium: "",
          day: "",
          schedule: "",
        });
      }
      setLoadingSpin(false);
    } else {
      modelForme.map((item, index) => {
        if (arrayIdsRequiere.includes(item.id)) {
          item.display = "block";
        } else {
          item.display = "none";
        }
      });
    }
    setModelForme(modelForme);
    setRandom(random + 1);
  };
  console.log("mobile", mobile);

  const renderForm = () => {
    return (
      <>
        <CenteredDiv>
          <CubeDiv>
            <ClassLabelBodyOwner>Registra tu Solicitud</ClassLabelBodyOwner>
            <Subtitle>
              Compártenos tus datos y en breve te contactaremos
            </Subtitle>
            <Row id={"row"}>
              {modelForme.map((item, index) => {
                return (
                  <SelectOwner key={index} id={item.id}>
                    <Label>{item.label}</Label>
                    {item.type === "select" ? (
                      <div>
                        <StyledSelect
                          id={item.id}
                          value={registerProperty[item.id]}
                          onChange={(e) => onChangeSelect(e, item.id)}
                        >
                          <option value="" disabled selected hidden></option>
                          {item.options.map((option, optIndex) => (
                            <option key={optIndex} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </StyledSelect>
                        <StyledLabel
                          id="validateEmailLabel"
                          display={item.display}
                        >
                          {item.label} es requerido
                        </StyledLabel>
                      </div>
                    ) : (
                      <div>
                        <StyledInputOwner
                          id="inputOwner"
                          autoComplete="off"
                          placeholder={item.placeholder}
                          value={registerProperty[item.id]}
                          onChange={(e) => onChangeInput(e, item.id)}
                        />
                        <StyledLabel
                          id="validateEmailLabel"
                          display={item.display}
                        >
                          {item.label} es requerido
                        </StyledLabel>
                        {item.id === "email" ? (
                          <StyledLabel id="validateClassError">
                            Correo no válido
                          </StyledLabel>
                        ) : null}
                      </div>
                    )}
                  </SelectOwner>
                );
              })}
              <ButtonDiv>
                <ClassStyleButtonOwner
                  disabled={disableSend}
                  onClick={() => sendForm()}
                >
                  Enviar
                </ClassStyleButtonOwner>
              </ButtonDiv>
            </Row>
          </CubeDiv>
        </CenteredDiv>
      </>
    );
  };

  return (
    <>
      <div id="body">
        <div
          style={{ color: "none", marginBottom: "3em", padding: "0em" }}
          className="col-12"
        >
          <div className="col-12 divcenter containerDiv">
            <div className="elementoDiv loginContainerFormSummary">
              {loadingSpin && (
                <Spin
                  size="large"
                  id="loaderClass"
                  spinning={loadingSpin}
                  delay={500}
                  style={{ marginTop: "17em" }}
                >
                  {renderForm()}
                </Spin>
              )}
              {!loadingSpin && renderForm()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
