export default [
	{
		title: 'Accelerated Bearing Failure Testing',
		backgroundImage: require('assets/img/accelerated-life-testing/accelerated-bearing-failure-testing/cover.jpg'),
		whatIsIt: 'Accelerated bearing failure testing on an industrial pump to track the signal degradation of different sensors.',
		whatEquipmentsAreInvolved:
			'UWA has a Goulds 3196MTX pump in a simple loop system that generates around 10m of head at full flow. The pump is fitted with a 1500W motor, which rotates the shaft at 1432 RPM. The pump has two bearings installed on the driving shaft, a 6309 radial bearing and 5309 thrust bearing. Both of these bearings measure 100mm in diameter (outer). \n The pump is located in a workshop, with capacity for drainage and ease in disassembling the pump.The installation of new bearings on the pump can be done exclusively at the UWA campus, requiring a technician or fitter to do the bearing installation.',
		whatEquipmentsAreInvolvedImage: require('assets/img/accelerated-life-testing/accelerated-bearing-failure-testing/equipment.jpg'),
		methodology:
			'Two different tests have been created for this pump based on the most common failure causes of pumps, failure through lubrication contamination. This was achieved by packing two different greases into the same bearing (Test 1) and mixing dirt sourced from the Pilbara (<70 micrometers) with grease. Both of these tests have proven results of creating failure profiles on the bearing, validated using temperature probes and piezoelectric accelerometers.\nThere is scope to perform the following tests:<ul><li>shaft misalignment</li><li>dirt / metal / quarts contamination</li><li>seeded defects in bearing</li><li>mixing greases</li></ul>',
		methodologyImage: require('assets/img/accelerated-life-testing/accelerated-bearing-failure-testing/methodology.jpg'),
		limitations:
			'The bearing changeout process can take some time due to needing an external contractor to strip the pump and replace the bearings.\nThe pump is located in a shared workspace, and cannot be left unsupervised during testing.\nUsing a pump for bearing replacements can take more time due to seal breakages and needing to order replacement parts.',
		limitationsImage: require('assets/img/accelerated-life-testing/accelerated-bearing-failure-testing/limitations.png'),
	},
	{
		title: 'Ultraviolet Radiation Testing',
		backgroundImage: require('assets/img/accelerated-life-testing/uv-testing/cover.jpg'),
		whatIsIt:
			'Accelerated UV degradation testing, to determine the reliability of equipment in a variety of environments, from the harsh Australian outback to the perpetual daylight of the polar regions, and their affect on all materials.',
		whatEquipmentsAreInvolved:
			'The Living Lab has access to a xenon arc lamp Atlas Suntest CPS+ accelerated weathering unit with daylight filters capable of producing UV radiation with a frequency between 300-800nm and a maximum intensity of 765W/㎡. The unit is located in a lab on UWA campus and can be set up to perform tests over long periods to expose equipment to sustained, elevated levels of UV radiation.',
		whatEquipmentsAreInvolvedImage: require('assets/img/accelerated-life-testing/uv-testing/equipment.jpg'),
		methodology:
			'The typical process for accelerated UV weathering testing employed by the Living Lab is as follows:<ul><li>Pre-test functional test and visual inspection of one unit</li><li>Expose the unit for a given time period at an agreed radiation level.  Rotate the unit by 180° halfway through the agreed testing period.</li><li>Functional test and visual inspection halfway through testing period.</li><li>Post-test functional test and visual inspection.</li><li>Assessment, if necessary, repetition of the test.</li></ul>',
		methodologyImage: require('assets/img/accelerated-life-testing/uv-testing/methodology.png'),
		limitations:
			'When designing the UV exposure testing scheme the Living Lab team consulted ISO 4892-1 Plastics — Methods of exposure to laboratory light sources — Part 1: General guidance and ISO 4892-2 Plastics — Methods of exposure to laboratory light sources — Part 2: Xenon-arc lamps. \nISO 4892-1 4.2.3 describes an important limitation of accelerated UV testing that “Even though it is very tempting, it is invalid to assign to all materials a “general acceleration factor” relating “x” hours or megajoules of radiant exposure in an artificial accelerated weathering or artificial accelerated irradiation exposure to “y” months or years of actual exposure”.\nThere will be differences in relative spectral irradiance between the Atlas light source and solar radiation, in the temperature and irradiance levels experienced by the test unit and those deployed in the field. However, the testing scheme devised by the Living Lab provides a good first indicator of whether or not a piece of equipment is ready for further testing and/or site trials. ',
		limitationsImage: require('assets/img/accelerated-life-testing/uv-testing/limitations.jpg'),
	},
	{
		title: 'Vibration Testing',
		backgroundImage: require('assets/img/accelerated-life-testing/vibration/cover.jpg'),
		whatIsIt:
			'Vibration testing to artificially generate the working environment shocks and vibrations by a range of controlled vibration signal generated by the amplifier. A dedicated space to conduct vibration testing is available within the newly built EZONE UWA.',
		whatEquipmentsAreInvolved:
			'Brüel & Kjær LDS V650 series electromagnetic vibration system can produce up to 1.62 KN of sine force (peak) and an acceleration up to 73.7 g with a maximum velocity up to 1400 mm/s.',
		whatEquipmentsAreInvolvedImage: require('assets/img/accelerated-life-testing/vibration/equipment.jpg'),
		methodology:
			'<ul><li>DUT (device under the test) to be tested for a frequencies and acceleration are mounted on either vertical or horizontal test bed. A set of signals are passed through the amplifier to the vibration shaker.</li><li>DUT is removed after the desired test is completed for the further investigation of the condition of the DUT before and after the test.</li></ul>',
		methodologyImage: require('assets/img/accelerated-life-testing/vibration/methodology.png'),
		limitations:
			'Vibration shaker has an output envelope which is a function of mass of the DUT, sine force and the displacement required to be produced by the shaker.',
		limitationsImage: require('assets/img/accelerated-life-testing/vibration/limitations.jpg'),
	},
	{
		title: 'Ingress Protection Testing (Water)',
		backgroundImage: require('assets/img/accelerated-life-testing/ip-testing-water/cover.png'),
		whatIsIt:
			'A range of tests to validate your products IP rating. The ingress of water (‘leaking’) into a device poses a major risk to the long-term function of a piece of equipment, particularly if it is kept outside for sustained periods. ',
		whatEquipmentsAreInvolved:
			'The Living Lab has a purpose-built ingress protection test system. This comprises a one metre-deep clear acrylic tank, water hose, and mounting attachment. It is capable of testing from IPX1 to IPX7; the equivalent of light splashes to full submersion at depth. The unit is located in the university’s hydrology laboratory allowing tests to be carried out quickly and effectively. ',
		whatEquipmentsAreInvolvedImage: require('assets/img/accelerated-life-testing/ip-testing-water/equipment.png'),
		methodology:
			'A typical test procedure for ingress protection testing (water) as carried out by the Living Lab is as follows:<ul><li>Remove any electronic components from within the container being tested (if practical)</li><li>Prepare the sample as per client instructions. The sample should be as close to room temperature as possible to reduce condensation inside the container</li><li>Mount the device onto the short backing plate and use the hose to spray the sample. Use flow rate and direction as indicated in the IPX1-IPX6 standard being tested for</li><li>Open the device and visually inspect for the ingress of water. Record any ingress, dry the sample and repeat test as needed</li><li>Replace the backing plate with the longer version. This will allow the sample to be submerged in the tank to a depth of one metre.</li><li>As per IPX7, submerge the sample at a one metre depth for 30 minutes. Open the device and inspect for water ingress.</li></ul>',
		methodologyImage: require('assets/img/accelerated-life-testing/ip-testing-water/methodology.png'),
		limitations:
			'This Living Lab team consulted Chapters 11 and 14 of AS 60529-2004 when designing this test. The test is limited to a fresh - water environment with a maximum rating of IPX7(temporary submersion at one metre depth).If the device is expected to be used at depths greater than one metre an alternate rig can be used.',
		limitationsImage: require('public/img/feature-bg.jpg'),
	},
	{
		title: 'Ingress Protection Testing (Dust)',
		backgroundImage: require('assets/img/accelerated-life-testing/ip-testing-dust/cover.jpg'),
		whatIsIt:
			'Simulation of the dusty conditions that devices can be exposed to while on a mine site. Electronics and sensors are placed within the simulation enclosure to see how they perform under dusty conditions.',
		whatEquipmentsAreInvolvedImage: require('assets/img/accelerated-life-testing/ip-testing-water/equipment.png'),
		methodology:
			'A typical test procedure for ingress protection testing (water) as carried out by the Living Lab is as follows:<ul><li>Remove any electronic components from within the container being tested (if practical)</li><li>Prepare the sample as per client instructions. The sample should be as close to room temperature as possible to reduce condensation inside the container</li><li>Mount the device onto the short backing plate and use the hose to spray the sample. Use flow rate and direction as indicated in the IPX1-IPX6 standard being tested for</li><li>Open the device and visually inspect for the ingress of water. Record any ingress, dry the sample and repeat test as needed</li><li>Replace the backing plate with the longer version. This will allow the sample to be submerged in the tank to a depth of one metre.</li><li>As per IPX7, submerge the sample at a one metre depth for 30 minutes. Open the device and inspect for water ingress.</li></ul>',
		methodologyImage: require('assets/img/accelerated-life-testing/ip-testing-water/methodology.png'),
		limitations:
			'This Living Lab team consulted Chapters 11 and 14 of AS 60529-2004 when designing this test. The test is limited to a fresh - water environment with a maximum rating of IPX7(temporary submersion at one metre depth).If the device is expected to be used at depths greater than one metre an alternate rig can be used.',
		limitationsImage: require('public/img/feature-bg.jpg'),
		workInProgress: true,
	},
	{
		title: 'Electro-Magnetic Compatibility Testing',
		backgroundImage: require('assets/img/accelerated-life-testing/emc-testing/cover.jpg'),
		whatIsIt:
			'Electro-Magnetic Compatibility (EMC) testing to verify if a device is emitting large amounts of electro-magnetic radiation, which can be potentially harmful to other equipment, and if it is susceptible to electromagnetic radiation emitted nearby.',
		whatEquipmentsAreInvolved:
			'The TBPS01 EMC near field probes H20, H10, H5 and E5 are magnetic field (H) and electric field (E) probes for radiated emissions EMC pre-compliance measurements. The probes are used in the near field of sources of electromagnetic radiation. They serve to locate and identify potential sources of interference within the building blocks of electronic assemblies. The probes act similar as wide bandwidth antennas, picking up radiated emissions from components, PCB traces, housing openings or gaps and from any other parts that could be emitting RF. The probes are usually connected to a spectrum analyzer. Scanning the probe over the surface of a PCB assembly or housing quickly identifies locations which emit electromagnetic radiation. By changing to a probe with smaller size, the origination of the emissions can be further narrowed down. The TBWA2/20dB wideband amplifier is connected between EMC probe and Spectrum Analyzer to increase the dynamic range of the measurements.\n A large probe will be able to detect radiation easier, however it will be difficult to decern what the source of the radiation is. Smaller probes allow you to tell which component of the device is emitting the radiation but will be more difficult to detect the radiation initially. The probes can be swapped mid-way through, detecting an initial signal with the larger probe, and then narrowing in on the source with the smaller probe. The smallest probe is a E-field probe and is used to detect electric field as opposed to the magnetic field for the 3 other larger probes.',
		whatEquipmentsAreInvolvedImage: require('assets/img/accelerated-life-testing/emc-testing/equipment.jpg'),
		methodology:
			'<strong>Test 1: Radiation test</strong><ul><li>Choose the appropriate probe from the tekbox probe set.</li><li>Connect the probe to the amplifier and connect the amplifier to the spectrum analyser.</li><li>Configure the spectrum analyser to show the frequency range of interest or alternately show the entire frequency range of the analyser.</li><li>Place the probes near the device without touching any electrical components (The probes are electrically insulated, however if this insulation becomes damaged there can be a risk of electrical shock)</li><li>Read radiation detected from the spectrum analyser</li></ul><strong>Test 2: Immunity test</strong>\nFor this test you plug the probes into an RF generator to produce a RF field. The probes are then placed near the device. Changes to the operation of the device must then be monitored. Changes such as the device switching off, changing states, loss of memory, etc. If none of these occur, then the device passes. Failing one or more of these does not mean the device automatically fails. Depending on the standard used as long as the device has no permanent damage or loss of data then the device will normally pass with just a lower grade\nWarning: Some frequencies are illegal to be emitted. Before completing this test please check if the frequency being used is allowed. If not, then the test must be performed in an electrically shielded room.',
		methodologyImage: require('assets/img/accelerated-life-testing/emc-testing/methodology.jpg'),
		limitations:
			'The standards for EMC testing are all defined in the far-field. The probes we have are near-field probes and hence we cannot measure the far field radiation. Additionally, there is no way to convert between far field and near field. The test we do will indicate which components are emitting large amounts of radiation, but we will not be able to determine if a device complies with a specific standard or not.',
		limitationsImage: require('assets/img/accelerated-life-testing/emc-testing/limitations.jpg'),
	},
	{
		title: 'Drop Test',
		backgroundImage: require('assets/img/accelerated-life-testing/drop-test/cover.jpg'),
		whatIsIt: 'Drop Test is the method of testing product shock resistance in different conditions.',
		whatEquipmentsAreInvolved: '',
		whatEquipmentsAreInvolvedImage: require('public/img/feature-bg.jpg'),
		methodology: '',
		methodologyImage: require('public/img/feature-bg.jpg'),
		limitations: '',
		limitationsImage: require('public/img/feature-bg.jpg'),
		workInProgress: true,
	},
];
