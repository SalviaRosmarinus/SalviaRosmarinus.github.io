export type Publication = {
  title: string;
  authors: string;
  year: number;
  venue: string;
  url: string;
  doi?: string;
  status?: string;
  area: 'Hadron physics' | 'Lattice QCD' | 'Nuclear theory';
};

// Newest first by initial arXiv posting, regardless of journal publication year.
export const publications: Publication[] = [
  {
    title: 'The ΣN threshold structure in the K⁻d → π⁻Λp reaction',
    authors: 'Shunsuke Yasunaga and Daisuke Jido',
    year: 2026,
    venue: 'arXiv:2610.15928',
    url: 'https://arxiv.org/abs/2610.15928',
    status: 'Preprint',
    area: 'Hadron physics',
  },
  {
    title: 'Hyperon–nucleon interaction through the K⁻d → πΛN reaction',
    authors: 'Shunsuke Yasunaga and Daisuke Jido',
    year: 2026,
    venue: 'arXiv:2605.00727',
    url: 'https://arxiv.org/abs/2605.00727',
    status: 'Proceedings',
    area: 'Hadron physics',
  },
  {
    title: 'Parameter Optimization of Domain-Wall Fermion using Machine Learning',
    authors: 'Shunsuke Yasunaga, Kenta Yoshimura, Akio Tomiya, and Yuki Nagai',
    year: 2026,
    venue: 'arXiv:2603.16329',
    url: 'https://arxiv.org/abs/2603.16329',
    status: 'Preprint',
    area: 'Lattice QCD',
  },
  {
    title: 'Isotone Chain Study of Antiprotonic-Atom Spectroscopy and Strong Spin–Orbit Splittings',
    authors: 'Kenta Yoshimura, Shunsuke Yasunaga, Daisuke Jido, and Hiroyuki Fujioka',
    year: 2026,
    venue: 'Progress of Theoretical and Experimental Physics 2026, 073D01',
    url: 'https://arxiv.org/abs/2511.07169',
    area: 'Nuclear theory',
  },
  {
    title: 'Theoretical study of the ΣN cusp in the K⁻d → πΛN reaction',
    authors: 'Shunsuke Yasunaga and Daisuke Jido',
    year: 2025,
    venue: 'arXiv:2501.14227',
    url: 'https://arxiv.org/abs/2501.14227',
    status: 'Proceedings',
    area: 'Hadron physics',
  },
  {
    title: 'Interrelation between Antiprotonic-Ca Atom Spectra and Nuclear Density Profiles',
    authors: 'Kenta Yoshimura, Shunsuke Yasunaga, Daisuke Jido, Junko Yamagata-Sekihara, and Satoru Hirenzaki',
    year: 2025,
    venue: 'Progress of Theoretical and Experimental Physics 2025, 113D02',
    url: 'https://arxiv.org/abs/2408.14760',
    doi: 'https://doi.org/10.1093/ptep/ptaf140',
    area: 'Nuclear theory',
  },
  {
    title: 'K⁻d → πΛN reaction with in-flight kaons for studying the ΛN interaction',
    authors: 'Shunsuke Yasunaga, Daisuke Jido, and Takatsugu Ishikawa',
    year: 2025,
    venue: 'Physical Review C 112, 015208',
    url: 'https://arxiv.org/abs/2405.15534',
    doi: 'https://doi.org/10.1103/8d48-w2dr',
    area: 'Hadron physics',
  },
];
