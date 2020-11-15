DROP TABLE patients;
DROP TABLE patientorders;

CREATE TABLE patientorders (
  patient_order_id SERIAL PRIMARY KEY,
  creation_date VARCHAR(255),
  patient_id INT,
  order_code INT,
  status VARCHAR(255)
);

CREATE TABLE patients (
  mrn SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  dob VARCHAR(255),
  address VARCHAR(255),
  patient_orders INT REFERENCES patientorders(patient_order_id)
);

INSERT INTO patients (mrn, first_name, last_name, dob, address) VALUES (123456, 'Tamas', 'Zentai', '1989-12-28', '1 Fake street Faketown');