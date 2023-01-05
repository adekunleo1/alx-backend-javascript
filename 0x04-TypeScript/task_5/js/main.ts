interface MajorCredits {
  credits: number;
  _majorBrand: 'major';
}

interface MinorCredits {
  credits: number;
  _minorBrand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

const Biology = { credits: 3 } as MajorCredits;
const English = { credits: 3 } as MajorCredits;
const Writing = { credits: 1 } as MinorCredits; 
const Art = { credits: 1 } as MinorCredits; 

console.log(sumMajorCredits(Biology, English));
console.log(sumMinorCredits(Writing, Art));
