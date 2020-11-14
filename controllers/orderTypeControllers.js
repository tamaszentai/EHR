orderTypes = [

{orderCode: '100116', orderName: 'Basic Metabolic Panel', specimenType: 'blood'},
{orderCode: '100120', orderName: 'Comprehensive Metabolic', specimenType: 'blood'},
{orderCode: '100121', orderName: 'Electrolyte Panel', specimenType: 'blood'},
{orderCode: '100124', orderName: 'General Chemistry 13', specimenType: 'blood'},
{orderCode: '100125', orderName: 'General Chemistry 6', specimenType: 'blood'},
{orderCode: '100129', orderName: 'Hematology', specimenType: 'blood'},
{orderCode: '100130', orderName: 'Kidney Check', specimenType: 'blood'},
{orderCode: '100131', orderName: 'Lipid Panel', specimenType: 'blood'},
{orderCode: '100132', orderName: 'Lipid Panel Plus', specimenType: 'blood'},
{orderCode: '100133', orderName: 'Liver Panel Plus', specimenType: 'blood'},
{orderCode: '100134', orderName: 'MetLyte 8 Panel', specimenType: 'blood'},
{orderCode: '100135', orderName: 'Renal Function Panel', specimenType: 'blood'},
{orderCode: '100137', orderName: 'Vitamin D', specimenType: 'blood'},
{orderCode: '100138', orderName: 'Total PSA', specimenType: 'blood'},
{orderCode: '100139', orderName: 'TSH', specimenType: 'blood'},
{orderCode: '100140', orderName: 'Urinalysis', specimenType: 'brine'},
{orderCode: '100141', orderName: 'Microalbumin', specimenType: 'brine'},
{orderCode: '100152', orderName: 'Testosterone', specimenType: 'blood'},
{orderCode: '100153', orderName: 'Basic Metabolic Panel Plus', specimenType: 'blood'},
{orderCode: '100154', orderName: 'Albumin Creatinine Ratio', specimenType: 'brine'},
{orderCode: '100155', orderName: 'Hemoglobin A1c', specimenType: 'blood'},
{orderCode: '100156', orderName: 'hCG, Urine', specimenType: 'brine'},
{orderCode: '100157', orderName: 'hCG, Serum', specimenType: 'berum'},
{orderCode: '100158', orderName: 'Hemoglobin', specimenType: 'blood'},
{orderCode: '100159', orderName: 'Influenza A + B', specimenType: 'swab'},
{orderCode: '100160', orderName: 'Strep A+', specimenType: 'swab'},
{orderCode: '100161', orderName: 'Respiratory Syncytial Virus (RSV)', specimenType: 'swab'},
{orderCode: '100162', orderName: 'HSV 1 + 2 and VZV ', specimenType: 'blood'},
{orderCode: '100165', orderName: 'RSV + hMPV', specimenType: 'swab'},
{orderCode: '100166', orderName: 'C. difficile', specimenType: 'stool'},
{orderCode: '100209', orderName: 'Cardiac Panel', specimenType: 'blood'},
{orderCode: '100210', orderName: 'B,D-Dimer', specimenType: 'blood'}
]

const getAllOrderTypes = (req, res, next) => {
  res.status(200).json(orderTypes);
}

exports.getAllOrderTypes = getAllOrderTypes;