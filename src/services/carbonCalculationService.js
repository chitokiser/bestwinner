/**
 * Carbon Calculation Service
 * Decoupled engine for computing CO2 emission reductions and projected carbon credits
 * based on solar generation, grid emission factors, and methodology standards (e.g. Verra VMR0017 / ACM0002).
 */

// Default emission factors (tCO2e per MWh)
export const EMISSION_FACTORS = {
  VIETNAM_NATIONAL_GRID: 0.533, // Vietnam grid average emission factor (~0.533 tCO2e/MWh)
  SOUTH_EAST_ASIA_AVG: 0.585,
  KOREA_GRID_AVG: 0.459,
  GLOBAL_DEFAULT: 0.500
};

export const METHODOLOGIES = [
  { id: 'VMR0017', name: 'Verra VMR0017 (Grid-connected RE Generation)', active: true, desc: 'Verra ACM0002 Revision v1.0 applicable to solar PV' },
  { id: 'ACM0002', name: 'UNFCCC ACM0002 (Grid-connected RE)', active: true, desc: 'Consolidated baseline methodology for renewable electricity' },
  { id: 'CUSTOM_PENDING', name: 'Custom / Pending Validation', active: false, desc: 'Projected methodology under developer review' }
];

export class CarbonCalculationService {
  /**
   * Calculates CO2 emission reduction based on solar generation.
   * Note: Output is ALWAYS marked as Projected / Estimated until official 3rd-party audit verification.
   * 
   * Formula:
   * Gross Reduction = Generation (MWh) * Emission Factor (tCO2e/MWh)
   * Net Reduction = Max(0, Gross Reduction - Project Emissions - Leakage)
   * Estimated Credits = Floor(Net Reduction)
   */
  static calculateCO2Reduction({
    solarCapacityKW = 1000,
    annualGenerationMWh = null,
    operatingHoursPerDay = 4.2,
    emissionFactor = EMISSION_FACTORS.VIETNAM_NATIONAL_GRID,
    projectEmissions = 0,
    leakageEmissions = 0,
    methodologyId = 'VMR0017'
  }) {
    // If annual generation is not directly provided, estimate based on capacity and daily solar hours
    const estimatedAnnualGenerationMWh = annualGenerationMWh !== null 
      ? Number(annualGenerationMWh) 
      : (solarCapacityKW * operatingHoursPerDay * 365) / 1000;

    const grossReduction = estimatedAnnualGenerationMWh * emissionFactor;
    const netReduction = Math.max(0, grossReduction - projectEmissions - leakageEmissions);
    const estimatedCredits = Math.floor(netReduction);

    return {
      solarCapacityKW: Number(solarCapacityKW),
      solarCapacityMW: Number(solarCapacityKW) / 1000,
      annualGenerationMWh: Math.round(estimatedAnnualGenerationMWh * 10) / 10,
      emissionFactor,
      grossReduction: Math.round(grossReduction * 10) / 10,
      projectEmissions,
      leakageEmissions,
      netReduction: Math.round(netReduction * 10) / 10,
      estimatedCredits,
      methodology: METHODOLOGIES.find(m => m.id === methodologyId) || METHODOLOGIES[0],
      disclaimer: "Projected / Estimated CO2 Emission Reduction prior to 3rd-party VVB verification."
    };
  }
}
