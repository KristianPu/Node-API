class Constants {
    static get EXPIRES_IN() {
      return "1h";
    }
  
    // static get FIELD_ERRORS() {
    //   return {
    //     ID_HAYA: 601,
    //     ID_18: 602,
    //     Telefono: 603,
    //     Nombre_del_Cliente: 604,
    //     ID_Oportunidad: 605,
    //     Fecha_ultima_actividad: 606,
    //     Municipio: 607,
    //     Provincia: 608,
    //   };
    // }
  
    static get OUTCOME_CODES() {
      return {
        interested: 1,
        not_interested: 2,
      };
    }
  
    static get DATETIME_REGEX_PLUS() {
      return /(\d{4}-\d{2}-\d{2})T+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)Z/;
    }
  
    static get DATETIME_REGEX_SPACE() {
      return /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    }
  
    static get DATETIME_REGEX_SPACE_ERROR_MESSAGE() {
      return "Wrong date format. It should be like 2022-02-01 00:00:00";
    }
  
    static get STATUS_ENUM() {
      return {
        dataReceived: "0",
        validationError: "1",
        gocSuccess: "2",
        gocFail: "3",
        duplicate: "4",
      };
    }
  }
  
  module.exports = Constants;
  