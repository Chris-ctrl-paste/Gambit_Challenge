






// 1-2 Flow Rate
// 3-4 Energy Flow Rate
// 5-6 Velocity
// 7-8 Fluid sound speed
// 9-10 positive accumulator
// 11-12 Positive decimal fraction
// 13-14 Negative accumulator
// 15-16 Negative decimal fraction
// 17-18 Positive energy accumulator 
// 0019-0020 2 Positive energy decimal fraction 
// 0021-0022 2 Negative energy accumulator 
// 0023-0024 2 Negative energy decimal fraction 
// 0025-0026 2 Net accumulator LONG
// 0027-0028 2 Net decimal fraction REAL4
// 0029-0030 2 Net energy accumulator LONG
// 0031-0032 2 Net energy decimal fraction REAL4
// 0033-0034 2 Temperature #1/inlet REAL4 Unit: C
// 0035-0036 2 Temperature #2/outlet REAL4 Unit: C
// 0037-0038 2 Analog input AI3 REAL4
// 0039-0040 2 Analog input AI4 REAL4
// 0041-0042 2 Analog input AI5 REAL4
// 0043-0044 2 Current input at AI3 REAL4 In unit mA
// 0045-0046 2 Current input at AI3 REAL4 In unit mA
// 0047-0048 2 Current input at AI3 REAL4 In unit mA
// 0049-0050 2 System password 
// 0051 Password for hardware BCD Writable。
// 0053-0055 3 Calendar (date and time) BCD Writable。6 Bytes of
// 0056  Day+Hour for Auto-Save BCD Writable。For
// 0059  Key to input INTEGER Writable
// 0060  Go to Window # INTEGER Writable。
// 0061  LCD Back-lit lights for number of
// 0062  Times for the beeper INTEGER Writable。Max 255
// 0062  Pulses left for OCT INTEGER Writable。Max 65535
// 0072  Error Code BIT 16bits, see note 4
// 0077-0078 2 PT100 resistance of inlet REAL4 In unit Ohm
// 0079-0080 2 PT100 resistance of outlet REAL4 In unit Ohm
// 0081-0082 2 Total travel time REAL4 In unit Micro-second
// 0083-0084 2 Delta travel time REAL4 In unit Nino-second
// 0085-0086 2 Upstream travel time REAL4 In unit Micro-second
// 0087-0088 2 Downstream travel time REAL4 In unit Micro-second
// 0089-0090 2 Output current REAL4 In unit mA
// 0092 Working step and Signal Quality 
// 0093  Upstream strength INTEGER Range 0-2047
// 0094  Downstream strength INTEGER Range 0-2047
// 0096  Language used in user interface INTEGER 0 : English，1:Chinese
// 0097-0098 2 The rate of the measured travel
// 0099-0100 2 Reynolds number REAL4 