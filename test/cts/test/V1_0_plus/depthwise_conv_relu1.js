describe('CTS', function() {
  const assert = chai.assert;
  const nn = navigator.ml.getNeuralNetworkContext();

  it('check result for Depthwise conv relu1 example-1', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op2_value = [-0.869931, 0.644628, -0.918393, 0.153672, 0.868562, -0.358177, -0.134931, -0.247565, 0.22174, -0.259157, -0.284296, -0.538065, 0.765559, 0.41986, -0.556241, 0.658494, 0.214355, -0.850169, -0.252893, -0.478935, 0.530526, -0.0700663, -0.988729, -0.303061, 0.150845, 0.829915, 0.476349, 0.406537, -0.355343, 0.757145, -0.356362, 0.800482, -0.713861, 0.210483, -0.634303, 0.718236, -0.752038, 0.457547, -0.550769, -0.551178, 0.446766, -0.227462, 0.216348, -0.852806, -0.351486, 0.55906, -0.668493, -0.303493, -0.363763, -0.162837, 0.0701012, 0.756097, -0.142269, 0.329724, -0.656317, -0.998086, -0.652949, -0.40316, -0.893682, 0.432744, 0.612362, -0.869588, -0.71327, -0.398092, -0.0423559, 0.436576, -0.925272, 0.176549, 0.822904, 0.096833, -0.296802, -0.427195, 0.031654, -0.254479, 0.244905, 0.0948254, 0.643769, -0.90391, 0.352665, -0.901179, 0.266159, -0.968068, -0.615401, -0.388975, 0.939052, -0.116289, 0.107523, -0.0582711, 0.435172, 0.334675, 0.459711, 0.717436, 0.496627, -0.680175, -0.415066, 0.339848, 0.506004, -0.337808, -0.107218, -0.172496, 0.870638, 0.931872, -0.953884, 0.903042, 0.760078, 0.209727, -0.285384, -0.45514, 0.113194, 0.0756611, 0.0924435, -0.472863, 0.960609, -0.160385, -0.839445, 0.457097, 0.163348, 0.344867, -0.131619, 0.688715, -0.540827, 0.571259, -0.95587, 0.506164, -0.155839, 0.0789621, 0.756772, -0.662069, 0.242908, 0.460821, 0.177872, -0.289839, -0.640603, 0.702598, -0.506406, -0.568262, -0.0713716, 0.413792, 0.159673, -0.305208, 0.133816, -0.160254, 0.787323, -0.753244, 0.600721, 0.263186, -0.162387, 0.477962, -0.702951, -0.731036, -0.939481, -0.524519, 0.934072, -0.511637, -0.503499, 0.106236, -0.323684, 0.534444, -0.843745, 0.364171, 0.0370358, -0.168801, -0.404559, -0.814178, 0.91745, -0.334276, 0.66925, -0.801201, 0.156511, -0.427949, 0.379153, 0.818597, -0.649902, 0.427087, -0.586015, -0.559789, -0.833923, 0.0892409, -0.621251, 0.213826, 0.465509, 0.4704, 0.380261, 0.413067, 0.180822, 0.172866, 0.59614, 0.825575, 0.662916, -0.704381, -0.297631, 0.697778];
    let op3_expect = [0.8405386209487915, -0.3013468384742737, 0.7549465894699097, -0.1484798789024353, -0.40603014826774597, 0.29443225264549255, 0.1303720772266388, 0.11573020368814468, -0.18227693438529968, 0.2504008710384369, 0.13290099799633026, 0.4423055946826935, -0.7396930456161499, -0.19627363979816437, 0.4572467803955078, -0.6362454295158386, -0.10020539164543152, 0.6988644599914551, 0.24434849619865417, 0.22388966381549835, -0.4361082911491394, 0.06769897043704987, 0.46220511198043823, 0.24912524223327637, -0.14574840664863586, -0.3879636824131012, -0.3915731608867645, -0.39280131459236145, 0.16611362993717194, -0.6223958730697632, 0.3443215787410736, -0.37420451641082764, 0.5868151783943176, -0.20337140560150146, 0.2965201437473297, -0.5904115438461304, 0.7266288995742798, -0.21389134228229523, 0.4527486264705658, 0.532555341720581, -0.20885148644447327, 0.18698059022426605, -0.20903825759887695, 0.3986646234989166, 0.28893202543258667, -0.5401710271835327, 0.3125030994415283, 0.24948035180568695, 0.35147252678871155, 0.07612206786870956, -0.057625290006399155, -0.7305507659912109, 0.06650706380605698, -0.2710430324077606, 0.6341419816017151, 0.46657925844192505, 0.5367436408996582, 0.389538437128067, 0.41777312755584717, -0.35572853684425354, -0.5916721224784851, 0.40650978684425354, 0.5863293409347534, 0.3846416771411896, 0.019800281152129173, -0.35887858271598816, 0.8940098285675049, -0.08253207057714462, -0.6764518022537231, -0.09356129914522171, 0.1387472301721573, 0.35116711258888245, -0.030584506690502167, 0.11896231770515442, -0.20131924748420715, -0.091621533036232, -0.3009452819824219, 0.7430411577224731, -0.34074950218200684, 0.4212777614593506, -0.2187906801700592, 0.9353598952293396, 0.28768399357795715, 0.319749116897583, -0.9073242545127869, 0.054362084716558456, -0.088387131690979, 0.05630229413509369, -0.20343159139156342, -0.27511289715766907, -0.4441787302494049, -0.33538269996643066, -0.40824228525161743, 0.6571938991546631, 0.19403256475925446, -0.27936527132987976, -0.4889076054096222, 0.15791647136211395, 0.08813641220331192, 0.1666678786277771, -0.40700066089630127, -0.7660267353057861, 0.9216551184654236, -0.4221486747264862, -0.6248069405555725, -0.20264095067977905, 0.13340960443019867, 0.374138742685318, -0.10936951637268066, -0.035369597375392914, -0.07599133253097534, 0.456886351108551, -0.44905975461006165, 0.1318412870168686, 0.811082661151886, -0.21368096768856049, -0.13427695631980896, -0.33321496844291687, 0.061528466641902924, -0.5661444067955017, 0.5225540399551392, -0.26704874634742737, 0.7857537865638733, -0.48906224966049194, 0.07285068184137344, -0.06490921974182129, -0.7312029004096985, 0.3095000684261322, -0.19967766106128693, -0.4452512264251709, -0.08315053582191467, 0.23825635015964508, 0.6189589500427246, -0.32844629883766174, 0.41628092527389526, 0.5490621328353882, 0.03336436673998833, -0.340149462223053, -0.15427812933921814, 0.14267680048942566, -0.11000077426433563, 0.15483950078487396, -0.36805304884910583, 0.6191891431808472, -0.580424427986145, -0.12303262203931808, 0.13348698616027832, -0.4618130922317505, 0.3286113440990448, 0.6009335517883301, 0.9077387452125549, 0.24519900977611542, -0.7678351998329163, 0.49435028433799744, 0.23537269234657288, -0.08732917904853821, 0.31274768710136414, -0.2498386651277542, 0.6935837268829346, -0.351866751909256, -0.0173132736235857, 0.13875947892665863, 0.3908901512622833, 0.3806070387363434, -0.7541714310646057, 0.3229818046092987, -0.3128570020198822, 0.6586112380027771, -0.15122295916080475, 0.2000550478696823, -0.31167516112327576, -0.7909390926361084, 0.30381229519844055, -0.3510783314704895, 0.5662152767181396, 0.2616868019104004, 0.6855097413063049, -0.0862257182598114, 0.29041868448257446, -0.17577138543128967, -0.4497808516025543, -0.21989977359771729, -0.3125859498977661, -0.39911070466041565, -0.0845295861363411, -0.14210103452205658, -0.5759982466697693, -0.38593485951423645, -0.5449368357658386, 0.6805820465087891, 0.1391347497701645, -0.5735944509506226];

    let type0 = {type: nn.INT32};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 1, 1, 3]};
    let type2_length = product(type2.dimensions);
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1_length = product(type1.dimensions);
    let type3 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type3_length = product(type3.dimensions);

    let b4 = operandIndex++;
    model.addOperand(type0);
    let b5 = operandIndex++;
    model.addOperand(type0);
    let b6 = operandIndex++;
    model.addOperand(type0);
    let b7 = operandIndex++;
    model.addOperand(type0);
    let b8 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let op3 = operandIndex++;
    model.addOperand(type1);
    let op0 = operandIndex++;
    model.addOperand(type2);
    let op1 = operandIndex++;
    model.addOperand(type3);

    model.setOperandValue(b4, new Int32Array([1]));
    model.setOperandValue(b5, new Int32Array([1]));
    model.setOperandValue(b6, new Int32Array([1]));
    model.setOperandValue(b7, new Int32Array([1]));
    model.setOperandValue(b8, new Int32Array([2]));
    model.setOperandValue(op0, new Float32Array([-0.966213, -0.467474, -0.82203]));
    model.setOperandValue(op1, new Float32Array([0, 0, 0]));
    model.addOperation(nn.DEPTHWISE_CONV_2D, [op2, op0, op1, b4, b5, b6, b7, b8], [op3]);

    model.identifyInputsAndOutputs([op2], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op2_input = new Float32Array(op2_value);
    execution.setInput(0, op2_input);

    let op3_output = new Float32Array(type1_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type1_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });

  it('check result for Depthwise conv relu1 example-2', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op2_value = [-0.295335, -0.00387601, -0.552251, 0.166084, -0.28482, -0.152143, -0.719885, -0.869386, -0.745598, 0.823947, 0.473183, -0.331337, 0.187631, 0.0426571, -0.826897, -0.755085, -0.472453, -0.0233656, 0.0483436, 0.933418, -0.961974, 0.0125783, 0.219742, 0.342604, -0.15166, 0.0934905, 0.783221, 0.129664, 0.838844, -0.271388, 0.924519, 0.342843, 0.274418, 0.350817, 0.841638, -0.543993, -0.00283395, -0.128467, -0.682943, -0.319117, 0.84634, 0.283003, 0.32865, 0.0293755, -0.0335696, 0.591266, -0.0743476, -0.741271, 0.462056, -0.583625, -0.590183, 0.6234, 0.535269, -0.670818, -0.955642, -0.770173, 0.479986, 0.664377, 0.399445, -0.968874, -0.276263, -0.901951, 0.544104, -0.958981, 0.482658, -0.807284, 0.305369, -0.947818, 0.827498, -0.382887, -0.805741, -0.796678, -0.299804, -0.229828, 0.818783, -0.103055, -0.45568, -0.227827, 0.543743, -0.96073, 0.946747, -0.857182, -0.96426, -0.292411, -0.715614, 0.765278, -0.475043, -0.590142, -0.238507, 0.673002, -0.473357, -0.319626, 0.936014, 0.486607, 0.580844, 0.425352, -0.800994, 0.290763, -0.494953, -0.441162, 0.718677, -0.828427, 0.96965, 7.53637e-05, -0.699973, -0.526886, -0.352682, 0.799466, 0.332789, 0.723389, 0.407659, -0.934084, -0.284705, 0.961484, -0.700395, -0.985808, -0.595342, -0.691721, 0.49448, -0.0842649, 0.0390966, 0.298938, -0.128094, -0.97158, 0.86393, 0.270606, -0.468986, -0.256605, 0.47215, -0.273117, -0.590343, -0.826529, -0.725381, -0.194821, -0.259661, -0.0949207, -0.180302, 0.0446834, -0.222133, -0.40393, 0.295772, -0.92949, 0.580079, -0.169856, 0.330311, 0.0173551, -0.635823, 0.475942, 0.907175, 0.242777, -0.512208, 0.362463, 0.0496289, 0.65171, 0.990057, 0.690733, -0.469013, -0.101311, -0.68372, -0.157841, -0.677711, -0.708224, -0.659437, -0.407607, 0.677033, 0.89032, 0.228307, -0.749514, 0.772958, 0.054701, 0.551705, 0.917052, -0.895022, -0.702397, 0.484142, 0.108648, 0.833347, 0.478872, -0.984112, 0.387176, -0.73299, 0.7526, 0.443312, -0.0987856, 0.125415, 0.10876, -0.498108, 0.43209, 0.344609, 0.928941, -0.130732, -0.0569167];
    let op3_expect = [0.2853565216064453, 0.0018119339365512133, 0.45396688580513, -0.16047252714633942, 0.13314594328403473, 0.1250661164522171, 0.6955622434616089, 0.4064153730869293, 0.6129039525985718, -0.7961083054542542, -0.22120076417922974, 0.2723689675331116, -0.18129150569438934, -0.019941085949540138, 0.6797341704368591, 0.7295729517936707, 0.22085949778556824, 0.019207224249839783, -0.04671021178364754, -0.43634864687919617, 0.7907715439796448, -0.012153317220509052, -0.10272367298603058, -0.2816307842731476, 0.14653585851192474, -0.043704379349946976, -0.643831193447113, -0.12528304755687714, -0.3921377658843994, 0.2230890691280365, -0.8932822942733765, -0.16027018427848816, -0.22557982802391052, -0.33896392583847046, -0.39344391226768494, 0.44717857241630554, 0.0027381994295865297, 0.06005498021841049, 0.5613996386528015, 0.30833500623703003, -0.395641952753067, -0.232636958360672, -0.31754589080810547, -0.01373228244483471, 0.027595218271017075, -0.5712888836860657, 0.03475557267665863, 0.6093470454216003, -0.4464445114135742, 0.272829532623291, 0.485148161649704, -0.602337121963501, -0.25022435188293457, 0.5514324903488159, 0.9233536720275879, 0.36003586649894714, -0.39456290006637573, -0.6419296860694885, -0.18673016130924225, 0.7964434623718262, 0.26692891120910645, 0.4216386675834656, -0.4472697973251343, 0.9265798926353455, -0.22563007473945618, 0.663611650466919, -0.2950514853000641, 0.44308027625083923, -0.6802281737327576, 0.36995038390159607, 0.3766629993915558, 0.6548932194709778, 0.2896745204925537, 0.10743861645460129, -0.6730641722679138, 0.09957308322191238, 0.21301856637001038, 0.18728062510490417, -0.5253715515136719, 0.4491163194179535, -0.7782544493675232, 0.8282204270362854, 0.4507664740085602, 0.24037061631679535, 0.6914355754852295, -0.35774755477905273, 0.3904995918273926, 0.5702028870582581, 0.11149582266807556, -0.5532278418540955, 0.45736366510391235, 0.14941684901714325, -0.7694315910339355, -0.47016599774360657, -0.2715294659137726, -0.34965211153030396, 0.7739307880401611, -0.13592414557933807, 0.4068662226200104, 0.4262564480304718, -0.33596280217170715, 0.6809918880462646, -0.9368883967399597, -3.52305723936297e-05, 0.5753988027572632, 0.5090841054916382, 0.16486966609954834, -0.6571850776672363, -0.3215450644493103, -0.3381655812263489, -0.3351079225540161, 0.9025241136550903, 0.13309219479560852, -0.7903687357902527, 0.676730751991272, 0.4608396291732788, 0.48938897252082825, 0.6683498620986938, -0.23115655779838562, 0.06926827132701874, -0.03777564316987991, -0.13974575698375702, 0.10529711097478867, 0.9387532472610474, -0.4038648307323456, -0.2224462628364563, 0.45314037799835205, 0.11995616555213928, -0.38812145590782166, 0.2638891935348511, 0.2759700119495392, 0.679431676864624, 0.700872540473938, 0.09107375144958496, 0.2134491205215454, 0.09171361476182938, 0.08428649604320526, -0.03673109784722328, 0.21462778747081757, 0.188826784491539, -0.24313345551490784, 0.8980852961540222, -0.2711718678474426, 0.13962672650814056, -0.31915077567100525, -0.008113058283925056, 0.5226656198501587, -0.4598613381385803, -0.4240807294845581, -0.19956998527050018, 0.49490201473236084, -0.16944202780723572, -0.040796443819999695, -0.6296906471252441, -0.4628259241580963, -0.5678032636642456, 0.4531664550304413, 0.04736026003956795, 0.5620383620262146, 0.15250802040100098, 0.31681227684020996, 0.5821813941001892, 0.63715660572052, 0.1905456781387329, -0.5565414428710938, -0.8602387309074402, -0.10672758519649506, 0.6161229610443115, -0.7468420267105103, -0.025571295991539955, -0.4535180628299713, -0.8860675096511841, 0.41839951276779175, 0.5773913860321045, -0.4677842855453491, -0.05079011619091034, -0.6850362420082092, -0.46269235014915466, 0.46004679799079895, -0.3182702958583832, 0.7082244753837585, -0.3518209457397461, -0.3644157648086548, 0.09544792771339417, -0.058628253638744354, -0.08940397948026657, 0.4812784194946289, -0.20199085772037506, -0.2832789421081543, -0.897554874420166, 0.061113812029361725, 0.046787235885858536];

    let type0 = {type: nn.INT32};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 1, 1, 3]};
    let type2_length = product(type2.dimensions);
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1_length = product(type1.dimensions);
    let type3 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type3_length = product(type3.dimensions);

    let b4 = operandIndex++;
    model.addOperand(type0);
    let b5 = operandIndex++;
    model.addOperand(type0);
    let b6 = operandIndex++;
    model.addOperand(type0);
    let b7 = operandIndex++;
    model.addOperand(type0);
    let b8 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let op3 = operandIndex++;
    model.addOperand(type1);
    let op0 = operandIndex++;
    model.addOperand(type2);
    let op1 = operandIndex++;
    model.addOperand(type3);

    model.setOperandValue(b4, new Int32Array([1]));
    model.setOperandValue(b5, new Int32Array([1]));
    model.setOperandValue(b6, new Int32Array([1]));
    model.setOperandValue(b7, new Int32Array([1]));
    model.setOperandValue(b8, new Int32Array([2]));
    model.setOperandValue(op0, new Float32Array([-0.966213, -0.467474, -0.82203]));
    model.setOperandValue(op1, new Float32Array([0, 0, 0]));
    model.addOperation(nn.DEPTHWISE_CONV_2D, [op2, op0, op1, b4, b5, b6, b7, b8], [op3]);

    model.identifyInputsAndOutputs([op2], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op2_input = new Float32Array(op2_value);
    execution.setInput(0, op2_input);

    let op3_output = new Float32Array(type1_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type1_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });
});