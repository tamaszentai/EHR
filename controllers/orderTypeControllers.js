orderTypes = [

{orderCode: '100116', orderName: 'Basic Metabolic Panel', specimenType: 'Blood'},
{orderCode: '100120', orderName: 'Comprehensive Metabolic', specimenType: 'Blood'},
{orderCode: '100121', orderName: 'Electrolyte Panel', specimenType: 'Blood'},
{orderCode: '100124', orderName: 'General Chemistry 13', specimenType: 'Blood'},
{orderCode: '100125', orderName: 'General Chemistry 6', specimenType: 'Blood'},
{orderCode: '100129', orderName: 'Hematology', specimenType: 'Blood'},
{orderCode: '100130', orderName: 'Kidney Check', specimenType: 'Blood'},
{orderCode: '100131', orderName: 'Lipid Panel', specimenType: 'Blood'},
{orderCode: '100132', orderName: 'Lipid Panel Plus', specimenType: 'Blood'},
{orderCode: '100133', orderName: 'Liver Panel Plus', specimenType: 'Blood'},
{orderCode: '100134', orderName: 'MetLyte 8 Panel', specimenType: 'Blood'},
{orderCode: '100135', orderName: 'Renal Function Panel', specimenType: 'Blood'},
{orderCode: '100137', orderName: 'Vitamin D', specimenType: 'Blood'},
{orderCode: '100138', orderName: 'Total PSA', specimenType: 'Blood'},
{orderCode: '100139', orderName: 'TSH', specimenType: 'Blood'},
{orderCode: '100140', orderName: 'Urinalysis', specimenType: 'Urine'},
{orderCode: '100141', orderName: 'Microalbumin', specimenType: 'Urine'},
{orderCode: '100152', orderName: 'Testosterone', specimenType: 'Blood'},
{orderCode: '100153', orderName: 'Basic Metabolic Panel Plus', specimenType: 'Blood'},
{orderCode: '100154', orderName: 'Albumin Creatinine Ratio', specimenType: 'Urine'},
{orderCode: '100155', orderName: 'Hemoglobin A1c', specimenType: 'Blood'},
{orderCode: '100156', orderName: 'hCG, Urine', specimenType: 'Urine'},
{orderCode: '100157', orderName: 'hCG, Serum', specimenType: 'Serum'},
{orderCode: '100158', orderName: 'Hemoglobin', specimenType: 'Blood'},
{orderCode: '100159', orderName: 'Influenza A + B', specimenType: 'Swab'},
{orderCode: '100160', orderName: 'Strep A+', specimenType: 'Swab'},
{orderCode: '100161', orderName: 'Respiratory Syncytial Virus (RSV)', specimenType: 'Swab'},
{orderCode: '100162', orderName: 'HSV 1 + 2 and VZV ', specimenType: 'Blood'},
{orderCode: '100165', orderName: 'RSV + hMPV', specimenType: 'Swab'},
{orderCode: '100166', orderName: 'C. difficile', specimenType: 'Stool'},
{orderCode: '100209', orderName: 'Cardiac Panel', specimenType: 'Blood'},
{orderCode: '100210', orderName: 'B,D-Dimer', specimenType: 'Blood'}
]

const getAllOrderTypes = (req, res, next) => {
  res.status(200).json(orderTypes);
}

exports.getAllOrderTypes = getAllOrderTypes;