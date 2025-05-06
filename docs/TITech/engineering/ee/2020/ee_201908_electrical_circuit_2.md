---
sidebar_label: "2019年8月実施 電気回路2"
tags:
  - TITech
  - Electrical-Circuit
---
# 東京工業大学 工学院 電気電子系 2019年8月実施 電気回路2

## **Author**
Zero

## **Description**
理想オペアンプを用いた回路について以下の問に答えよ。ただし，理想オペアンプの電圧利得は無限大，入力インピーダンスは無限大，出力インピーダンスはゼロである。また，$v_A,v_B,v_C,v_D$ は交流電圧，$i_A,i_B,i_C$ は交流電流，$\omega$ は角周波数，$j$ は虚数単位とする。なお，問 (3)，(4)，(6) については答だけでなく導出過程も示せ。

(1) 図 $2.1$ の増幅回路において，入力 $v_A,v_B,v_C$ と出力 $v_D$ の間の関係式を求めよ。

(2) 図 $2.1$ の増幅回路の入力インピーダンス $v_A/i_A,v_B/i_B,v_C/i_C$ を求めよ。 

(3) 図 $2.2$ のフィルタ回路の周波数伝達関数 $H(j\omega) = v_B/v_A$ を求めよ。

(4) 図 $2.2$ のフィルタ回路の出力（右側端子）を図 $2.3$ のフィルタ回路の入力（左側端子）に接続したとき，角周波数によらず常に $v_C = v_A$ となるための条件式を，$C,C',R,R'$ を用いて書き表せ。 

(5) 図 $2.4$ の回路は入力電圧の時間微分に比例した電圧を出力する。比例定数 $k$ を求めよ。 

(6) 図 $2.5$ の回路の入力インピーダンス $Z_{in} = v_A/i_A$ をインピーダンス $Z_1,Z_2,Z_3$ で表せ。

(7) 図 $2.5$ のインピーダンス $Z_2$ の素子をキャパシタンス $C$ のキャパシタとし，インピー
ダンス $Z_1,Z_3$ の素子をそれぞれ抵抗 $R_1,R_3$ とすることで，入力インピーダンス $Z_{in} = j\omega L_e$ が得られる。$L_e$ を求めよ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electrical_circuit_2_p1.png" width="600" alt=""/>
</figure>

## **Kai** 
### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electrical_circuit_2_p2.png" width="300" alt=""/>
</figure>

$v_A = R_1i_A$, $v_B = R_1i_B$, $v_C = R_1i_C$ より

$$
i = i_A + i_B + i_C = \frac{v_A}{R_1} + \frac{v_B}{R_1} + \frac{v_C}{R_1} = \frac{1}{R_1}(v_A + v_B + v_C)
$$

よって

$$
v_D = -iR_2 = -\frac{R_2}{R_1}(v_A + v_B + v_C)
$$

### (2)

$$
\frac{v_A}{i_A} = \frac{v_B}{i_B} = \frac{v_C}{i_C} = R_1
$$

### (3)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electrical_circuit_2_p3.png" width="250" alt=""/>
</figure>

$v_A = \frac{i}{j\omega C}$ より

$$
v_B = i(R + \frac{1}{j\omega C}) = j\omega C(R + \frac{1}{j\omega C})v_A
$$

$$
\frac{v_B}{v_A} = 1 + j\omega C R
$$

従って、

$$
H(j\omega) = 1 + j\omega C R
$$

### (4)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electrical_circuit_2_p4.png" width="250" alt=""/>
</figure>

$$
v_C = \frac{\frac{1}{j\omega C'}}{R' + \frac{1}{j\omega C'}}v_B = \frac{1}{1 + j\omega C'R'}v_B
$$

よって、

$$
v_C = \frac{1}{1 + j\omega C'R'} \cdot (1 + j\omega C R)v_A
$$

$$
\frac{v_C}{v_A} = \frac{1 + j\omega C R}{1 + j\omega C' R'} = 1
$$

従って、条件式は

$$
CR = C'R'
$$

### (5)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electrical_circuit_2_p5.png" width="250" alt=""/>
</figure>

$$
v_A = \frac{1}{C} \int idt \Rightarrow C\frac{dv_A}{dt} = i
$$

$$
v_B = -Ri = -RC\frac{dv_A}{dt}
$$

従って、

$$
K = -RC
$$

### (6)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electrical_circuit_2_p6.png" width="250" alt=""/>
</figure>

$v_A = Z_3i_B$ より

$$
v_B = (Z_3 + Z_2)i_B = (1 + \frac{Z_2}{Z_3})v_A
$$

$$
v_A - v_B = i_AZ_1
$$

$$
v_A - (1 + \frac{Z_2}{Z_3})v_A = i_AZ_1
$$

$$
-\frac{Z_2}{Z_3}v_A = i_AZ_1
$$

したがって、

$$
Z_{in} = \frac{v_A}{i_A} = -\frac{Z_1Z_3}{Z_2}
$$

### (7)

$$
Z_{in} = -\frac{R_1R_3}{\frac{1}{j\omega C}} = -j\omega CR_1R_3
$$

$$
L_e= -CR_1R_3
$$