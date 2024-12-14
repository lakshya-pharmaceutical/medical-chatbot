const medicines = {
    "fever": "Paracetamol",
    "cold": "Cetirizine",
    "headache": "Ibuprofen",
    "anemia": "Iron Supplements",
    "diabetes": "Metformin",
    "hypertension": "Amlodipine",
    "asthma": "Salbutamol",
    "allergy": "Loratadine",
    "arthritis": "Diclofenac",
    "gastroenteritis": "Loperamide",
    "insomnia": "Melatonin",
    "depression": "Fluoxetine",
    "anxiety": "Diazepam",
    "acne": "Benzoyl Peroxide",
    "eczema": "Hydrocortisone Cream",
    "psoriasis": "Methotrexate",
    "thyroid deficiency": "Levothyroxine",
    "vitamin D deficiency": "Vitamin D3",
    "vitamin B12 deficiency": "Cyanocobalamin",
    "cholesterol": "Atorvastatin",
    "gout": "Allopurinol",
    "migraine": "Sumatriptan",
    "chickenpox": "Acyclovir",
    "malaria": "Artemisinin",
    "tuberculosis": "Isoniazid",
    "HIV": "Antiretroviral Therapy",
    "hepatitis": "Interferon",
    "dengue": "Supportive Care",
    "influenza": "Oseltamivir",
    "pneumonia": "Amoxicillin",
    "urinary tract infection": "Nitrofurantoin",
    "kidney stones": "Hydrochlorothiazide",
    "constipation": "Lactulose",
    "diarrhea": "Oral Rehydration Salts",
    "heartburn": "Omeprazole",
    "peptic ulcer": "Ranitidine",
    "cancer": "Chemotherapy Agents",
    "stroke": "Aspirin",
    "sepsis": "Antibiotics",
    "chronic obstructive pulmonary disease": "Tiotropium",
    "multiple sclerosis": "Interferon Beta",
    "Parkinson's disease": "Levodopa",
    "Alzheimer's disease": "Donepezil",
    "bacterial infection": "Ciprofloxacin",
    "viral infection": "Antiviral Medications",
    "fungal infection": "Fluconazole",
    "ringworm": "Clotrimazole",
    "athlete's foot": "Terbinafine",
    "scabies": "Permethrin",
    "lice": "Permethrin Lotion",
    "toothache": "Ibuprofen",
    "gum disease": "Chlorhexidine",
    "sinusitis": "Amoxicillin",
    "otitis media": "Amoxicillin",
    "conjunctivitis": "Antibiotic Eye Drops",
    "glaucoma": "Timolol",
    "cataract": "Surgery",
    "dry eyes": "Artificial Tears",
    "earwax buildup": "Carbamide Peroxide",
    "motion sickness": "Dimenhydrinate",
    "nausea": "Ondansetron",
    "vomiting": "Metoclopramide",
    "chronic pain": "Gabapentin",
    "fibromyalgia": "Pregabalin",
    "sciatica": "NSAIDs",
    "carpal tunnel syndrome": "Wrist Splint",
    "tendonitis": "NSAIDs",
    "bursitis": "Corticosteroid Injection",
    "sprain": "RICE Method",
    "fracture": "Immobilization",
    "burn": "Silver Sulfadiazine",
    "wound infection": "Antibiotic Ointment",
    "allergic rhinitis": "Antihistamines",
    "hay fever": "Nasal Corticosteroids",
    "pollen allergy": "Antihistamines",
    "dust allergy": "Antihistamines",
    "pet allergy": "Antihistamines",
    "food allergy": "Epinephrine",
    "cholera": "Oral Rehydration Salts, Doxycycline",
    "typhoid fever": "Ciprofloxacin, Azithromycin",
    "hepatitis A": "Vaccination, Supportive Care",
    "hepatitis E": "Supportive Care",
    "dysentery": "Metronidazole",
};

document.getElementById('submit').addEventListener('click', () => {
    const illness = document.getElementById('illness').value.toLowerCase();
    const medicine = medicines[illness] || "Sorry, I don't have information on that illness.";
    document.getElementById('output').innerText = medicine;
});