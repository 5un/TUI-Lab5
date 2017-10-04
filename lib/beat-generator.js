export const generateBeat = (soundFuncs) => {
  const { hihat, drum, bass, orchestra, synth, open, snare } = soundFuncs;

  var C2 = 0+12*2, c2 = 1+12*2, D2 = 2+12*2, d2 = 3+12*2, E2 = 4+12*2, F2 = 5+12*2, f2 = 6+12*2, G2 = 7+12*2, g2 = 8+12*2, A2 = 9+12*2, a2 = 10+12*2, B2 = 11+12*2;
  var C3 = 0+12*3, c3 = 1+12*3, D3 = 2+12*3, d3 = 3+12*3, E3 = 4+12*3, F3 = 5+12*3, f3 = 6+12*3, G3 = 7+12*3, g3 = 8+12*3, A3 = 9+12*3, a3 = 10+12*3, B3 = 11+12*3;
  var C4 = 0+12*4, c4 = 1+12*4, D4 = 2+12*4, d4 = 3+12*4, E4 = 4+12*4, F4 = 5+12*4, f4 = 6+12*4, G4 = 7+12*4, g4 = 8+12*4, A4 = 9+12*4, a4 = 10+12*4, B4 = 11+12*4;
  var C5 = 0+12*5, c5 = 1+12*5, D5 = 2+12*5, d5 = 3+12*5, E5 = 4+12*5, F5 = 5+12*5, f5 = 6+12*5, G5 = 7+12*5, g5 = 8+12*5, A5 = 9+12*5, a5 = 10+12*5, B5 = 11+12*5;
  var C6 = 0+12*6, c6 = 1+12*6, D6 = 2+12*6, d6 = 3+12*6, E6 = 4+12*6, F6 = 5+12*6, f6 = 6+12*6, G6 = 7+12*6, g6 = 8+12*6, A6 = 9+12*6, a6 = 10+12*6, B6 = 11+12*6;

  var notes = [
     [hihat(),drum(),        bass(C3,1/16),                                                                                       ]//1/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(C3,1/16)                                                                                        ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(C3,1/16)                                                                                        ]
    ,[hihat(),               bass(C3,1/16)                                                                                        ]
    ,[open(),                bass(C3,1/16),                                                                                       ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(C3,1/16),                                                                                       ]
    ,[hihat(),               bass(C3,1/16),                                                                                       ]
    ,[open(),                                                                                                                     ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(C3,1/16),                                                                                        ]
    ,[hihat(),               bass(C3,1/16)                                                                                        ]
    ,[open(),                bass(C3,1/16),                                                                                        ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(G2,1/16),                   ]//16/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(G2,1/16)                                                                                        ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(G2,1/16)                                                                                        ]
    ,[hihat(),               bass(G2,1/16)                                                                                        ]
    ,[open(),                bass(G2,1/16),                                                                          ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(G2,1/16),                                                                          ]
    ,[hihat(),               bass(G2,1/16)                                                                                        ]
    ,[open(),                bass(G2,1/16),                                                                          ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(G2,1/16),                                                                          ]
    ,[hihat(),               bass(G2,1/16)                                                                                        ]
    ,[open(),                bass(G2,1/16),                                                        ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16),              ]//32/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16)                                                                                        ]//48/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ];
  return notes;
}

export const generateBeatWithSynth = (soundFuncs) => {
  const { hihat, drum, bass, orchestra, synth, open, snare } = soundFuncs;

  var C2 = 0+12*2, c2 = 1+12*2, D2 = 2+12*2, d2 = 3+12*2, E2 = 4+12*2, F2 = 5+12*2, f2 = 6+12*2, G2 = 7+12*2, g2 = 8+12*2, A2 = 9+12*2, a2 = 10+12*2, B2 = 11+12*2;
  var C3 = 0+12*3, c3 = 1+12*3, D3 = 2+12*3, d3 = 3+12*3, E3 = 4+12*3, F3 = 5+12*3, f3 = 6+12*3, G3 = 7+12*3, g3 = 8+12*3, A3 = 9+12*3, a3 = 10+12*3, B3 = 11+12*3;
  var C4 = 0+12*4, c4 = 1+12*4, D4 = 2+12*4, d4 = 3+12*4, E4 = 4+12*4, F4 = 5+12*4, f4 = 6+12*4, G4 = 7+12*4, g4 = 8+12*4, A4 = 9+12*4, a4 = 10+12*4, B4 = 11+12*4;
  var C5 = 0+12*5, c5 = 1+12*5, D5 = 2+12*5, d5 = 3+12*5, E5 = 4+12*5, F5 = 5+12*5, f5 = 6+12*5, G5 = 7+12*5, g5 = 8+12*5, A5 = 9+12*5, a5 = 10+12*5, B5 = 11+12*5;
  var C6 = 0+12*6, c6 = 1+12*6, D6 = 2+12*6, d6 = 3+12*6, E6 = 4+12*6, F6 = 5+12*6, f6 = 6+12*6, G6 = 7+12*6, g6 = 8+12*6, A6 = 9+12*6, a6 = 10+12*6, B6 = 11+12*6;

  var notes = [
     [hihat(),drum(),        bass(C3,1/16),orchestra(C5,1/4),synth(C3,1/1),synth(C4,1/1),synth(G3,1/1),synth(C5,1/2),synth(d5,3/8)]//1/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(C3,1/16)                                                                                        ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(C3,1/16)                                                                                        ]
    ,[hihat(),               bass(C3,1/16)                                                                                        ]
    ,[open(),                bass(C3,1/16),                  synth(D5,1/8)                                                        ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(C3,1/16),                  synth(C5,1/8)                                                        ]
    ,[hihat(),               bass(C3,1/16),                  synth(C3,1/1)                                                        ]
    ,[open(),                                                synth(D5,1/8)                                                        ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(C3,1/16),                  synth(d5,1/8)                                                        ]
    ,[hihat(),               bass(C3,1/16)                                                                                        ]
    ,[open(),                bass(C3,1/16),orchestra(G4,1/8),synth(G5,1/8)                                                        ]
    ,[                       bass(C3,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(G2,1/16),orchestra(a5,1/4),synth(G3,1/1),synth(G4,1/1),synth(D5,3/1),synth(a5,3/8)              ]//16/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(G2,1/16)                                                                                        ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(G2,1/16)                                                                                        ]
    ,[hihat(),               bass(G2,1/16)                                                                                        ]
    ,[open(),                bass(G2,1/16),                  synth(A5,1/8)                                                        ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(G2,1/16),                  synth(G5,1/8)                                                        ]
    ,[hihat(),               bass(G2,1/16)                                                                                        ]
    ,[open(),                bass(G2,1/16),                  synth(A5,1/8)                                                        ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(G2,1/16),                  synth(a5,1/8)                                                        ]
    ,[hihat(),               bass(G2,1/16)                                                                                        ]
    ,[open(),                bass(G2,1/16),orchestra(d5,1/8),synth(D6,1/8)                                                        ]
    ,[                       bass(G2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16),orchestra(F5,1/1),synth(a3,2/1),synth(a4,2/1),synth(F5,2/1),synth(F6,2/1)              ]//32/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16)                                                                                        ]//48/16
    ,[hihat()                                                                                                                     ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),        bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ,[hihat(),drum(),snare(),bass(a2,1/16)                                                                                        ]
    ,[hihat(),               bass(a2,1/16)                                                                                        ]
    ,[open(),                bass(a2,1/16)                                                                                        ]
    ,[                       bass(a2,1/16)                                                                                        ]
    ];
  return notes;
}