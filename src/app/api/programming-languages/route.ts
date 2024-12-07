import { NextResponse } from 'next/server';

const programmingLanguages = [
  { name: 'JavaScript', code: 'JS' },
  { name: 'Python', code: 'PY' },
  { name: 'Java', code: 'JAVA' },
  { name: 'C++', code: 'CPP' },
  { name: 'Ruby', code: 'RB' },
  { name: 'Go', code: 'GO' },
  { name: 'Rust', code: 'RS' },
  { name: 'TypeScript', code: 'TS' },
  { name: 'PHP', code: 'PHP' },
  { name: 'Swift', code: 'SWIFT' },
];

export async function GET() {
  return NextResponse.json(programmingLanguages);
}

