DROP TABLE patientorders;
DROP TABLE patients;
DROP TABLE ordertypes;


CREATE TABLE ordertypes (
  order_code SERIAL PRIMARY KEY,
  order_name VARCHAR(255),
  specimen_type VARCHAR(255)
);

CREATE TABLE patients (
  mrn SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  dob VARCHAR(255),
  address VARCHAR(255)
);

CREATE TABLE patientorders (
  patient_order_id SERIAL PRIMARY KEY,
  creation_date VARCHAR(255),
  patient_id INT REFERENCES patients(mrn) ON DELETE CASCADE,
  order_code INT,
  status VARCHAR(255)
);



INSERT INTO patients (mrn, first_name, last_name, dob, address) VALUES (111222, 'Tamas', 'Zentai', '1989-12-28', '1 Fake street Faketown');
INSERT INTO patients (mrn, first_name, last_name, dob, address) VALUES (222333, 'Tamas', 'Servanszki', '1988-04-08', '8 Cucumber street Faketown');
INSERT INTO patients (mrn, first_name, last_name, dob, address) VALUES (333444, 'Balazs', 'Danyi', '1992-04-01', '33 Branches street Faketown');
INSERT INTO patients (mrn, first_name, last_name, dob, address) VALUES (444555, 'Daniel', 'Pinter', '1990-05-19', '55 Stephen place Faketown');

INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100116, 'Basic Metabolic Panel', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100120, 'Comprehensive Metabolic', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100121, 'Electrolyte Panel', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100124, 'General Chemistry 13', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100125, 'General Chemistry 6', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100129, 'Hematology', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100130, 'Kidney Check', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100131, 'Lipid Panel', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100132, 'Lipid Panel Plus', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100133, 'Liver Panel Plus', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100134, 'MetLyte 8 Panel', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100135, 'Renal Function Panel', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100137, 'Vitamin D', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100138, 'Total PSA', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100139, 'TSH', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100140, 'Urinalysis', 'urine');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100141, 'Microalbumin', 'urine');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100152, 'Testosterone', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100153, 'Basic Metabolic Panel Plus', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100154, 'Albumin Creatinine Ratio', 'urine');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100155, 'Hemoglobin A1c', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100156, 'hCG, Urine', 'urine');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100157, 'hCG, Serum', 'serum');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100158, 'Hemoglobin', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100159, 'Influenza A + B', 'swab');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100160, 'Strep A+', 'swab');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100161, 'Respiratory Syncytial Virus (RSV)', 'swab');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100162, 'HSV 1 + 2 and VZV ', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100165, 'RSV + hMPV', 'swab');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100166, 'C. difficile', 'stool');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100209, 'Cardiac Panel', 'blood');
INSERT INTO ordertypes (order_code, order_name, specimen_type) VALUES (100210, 'B,D-Dimer', 'blood');

INSERT INTO patientorders (patient_order_id, creation_date, patient_id, order_code, status) VALUES (000000, '15/11/2020', 111222, 100116, 'accepted');
INSERT INTO patientorders (patient_order_id, creation_date, patient_id, order_code, status) VALUES (000001, '15/11/2020', 222333, 100125, 'accepted');
INSERT INTO patientorders (patient_order_id, creation_date, patient_id, order_code, status) VALUES (000002, '15/11/2020', 222333, 100131, 'accepted');
INSERT INTO patientorders (patient_order_id, creation_date, patient_id, order_code, status) VALUES (000003, '15/11/2020', 333444, 100133, 'accepted');
INSERT INTO patientorders (patient_order_id, creation_date, patient_id, order_code, status) VALUES (000004, '15/11/2020', 444555, 100154, 'accepted');