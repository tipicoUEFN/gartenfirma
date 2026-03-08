function roundToFive(value) {
  return Math.round(value / 5) * 5
}

function addRange(total, min, max) {
  return {
    min: total.min + min,
    max: total.max + max,
  }
}

function lawnRangeBySize(lawnSize) {
  switch (lawnSize) {
    case 'under100':
      return { min: 25, max: 35 }
    case '100to300':
      return { min: 40, max: 60 }
    case '300to600':
      return { min: 70, max: 90 }
    case 'over600':
      return { min: 100, max: 140 }
    default:
      return { min: 40, max: 100 }
  }
}

function leafRangeBySize(lawnSize) {
  switch (lawnSize) {
    case 'under100':
      return { min: 40, max: 60 }
    case '100to300':
      return { min: 60, max: 100 }
    case '300to600':
    case 'over600':
      return { min: 100, max: 150 }
    default:
      return { min: 60, max: 120 }
  }
}

function hedgeRange(lengthMeters, hedgeHeight) {
  if (!lengthMeters || Number.isNaN(lengthMeters) || lengthMeters <= 0) {
    return { min: 60, max: 140 }
  }

  const rate = hedgeHeight === 'over2m'
    ? { min: 7, max: 10 }
    : { min: 4, max: 6 }

  return {
    min: lengthMeters * rate.min,
    max: lengthMeters * rate.max,
  }
}

export function estimateServicePrice({
  services,
  lawnSize,
  hedgeLength,
  hedgeHeight,
  greenWaste,
  gardenAccess,
  urgency,
}) {
  if (!Array.isArray(services) || services.length === 0) {
    return null
  }

  let total = { min: 0, max: 0 }

  if (services.includes('rasen')) {
    const range = lawnRangeBySize(lawnSize)
    total = addRange(total, range.min, range.max)
  }

  if (services.includes('hecke')) {
    const hedgeMeters = Number(hedgeLength)
    const range = hedgeRange(hedgeMeters, hedgeHeight)
    total = addRange(total, range.min, range.max)
  }

  if (services.includes('laub')) {
    const range = leafRangeBySize(lawnSize)
    total = addRange(total, range.min, range.max)
  }

  if (services.includes('gartenpflege')) {
    total = addRange(total, 35, 90)
  }

  if (services.includes('fenster')) {
    total = addRange(total, 40, 100)
  }

  if (services.includes('aussenanlagen')) {
    total = addRange(total, 60, 150)
  }

  if (greenWaste === 'pickup') {
    total = addRange(total, 15, 30)
    if (services.includes('hecke') || services.includes('laub')) {
      total = addRange(total, 20, 50)
    }
  }

  if (gardenAccess === 'narrow') {
    total = addRange(total, 10, 20)
  }

  if (gardenAccess === 'slope') {
    total = addRange(total, 20, 40)
  }

  if (urgency === 'within3days') {
    total = {
      min: total.min * 1.15,
      max: total.max * 1.15,
    }
  }

  if (urgency === 'urgent') {
    total = {
      min: total.min * 1.25,
      max: total.max * 1.25,
    }
  }

  const min = roundToFive(total.min)
  const max = roundToFive(total.max)

  return {
    min,
    max,
    label: `${min} - ${max} €`,
  }
}
