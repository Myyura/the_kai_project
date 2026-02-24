---
sidebar_label: "2022年8月実施 電気回路2"
tags:
  - TITech
  - Electrical-Circuit
---
# 東京工業大学 工学院 電気電子系 2022年8月実施 電気回路2

:::danger[留学警示（商务部公告2026年第12号）]

根据中华人民共和国商务部公告2026年第12号，东京科学大学（東京科学大学/Institute of Science Tokyo）已被列入关注名单。请中国留学申请者慎重考虑相关风险，在做出留学决定前充分了解相关政策及其可能带来的影响。

:::

## **Author**
Zero

## **Description**
図 2.1 に示された回路の電流を求めることを考える。図 2.1 の回路は，抵抗がそれぞれ $R_1,R_2,R_3,R_4,R_5$ である $5$ つの素子と電圧源 $E$ から構成される。$R_1,R_2,R_3,R_4,R_5,E$ はそれぞれ $0$ ではない有限の値とする。電流 $I_1,I_2,I_3$ の正の向きをそれぞれ図 $2.1$ の矢印の向きとする。また，閉路 $A,B,C$ を図 $2.1$ に示すように定義する。以下の問に答えよ。

(1) 閉路 $A$ の電圧について，抵抗による電圧降下と電圧源の起電力が釣り合っていることを表す式を求め，答案用紙の $\boxed{\qquad}$ を埋めよ。 

(2) 閉路 $B$ の電圧について，抵抗による電圧降下の関係を表す式を求め，答案用紙の $\boxed{\qquad}$ を埋めよ。 

(3) 閉路 $C$ の電圧について，抵抗による電圧降下の関係を表す式を求め，答案用紙の $\boxed{\qquad}$ を埋めよ。

(4) 上記の (1)~(3) で求めた式は，行列を用いて下記の式で表せる。$R_1,R_2,R_3,R_4,R_5$ を用いて，この行列 $\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{pmatrix}$ を示せ。ただし，行列の $1$ 行目，$2$ 行目，$3$ 行目をそれぞれ閉路 $A,B,C$ に対応させること。 

$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{pmatrix}
\begin{pmatrix}
I_1 \\ I_2 \\ I_3
\end{pmatrix} = 
\begin{pmatrix}
E \\ 0 \\ 0
\end{pmatrix}
$$

(5) $R_1,R_2,R_3,R_4,R_5$ を用いて $I_2/I_3$ を表せ。なお，導出過程も示すこと。

(6) $R_5$ を流れる電流が $0$ となった。$R_1,R_2,R_3,R_4$ が満たす条件を表せ。

(7) (6)で求めた条件を満たすとき，$R_1,R_2,R_3,R_4,E$ のうち必要なものを用いて $I_1$ および $I_2$ を表せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electrical_circuit_2_p1.png" width="400" alt=""/>
</figure>

## **Kai** 
### (1)

$$
R_1(I_1 - I_2) + R_3(I_1 - I_3) = E
$$

### (2)

$$
R_1(I_2 - I_1) + R_2I_2 + R_5(I_2 - I_3) = 0
$$

### (3)

$$
R_3(I_3 - I_1) + R_4T_3 + R_5(I_3 - I_2) = 0
$$

### (4)

$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{pmatrix} = 
\begin{pmatrix}
R_1 + R_3 & -R_1 & -R_3 \\
-R_1 & R_1 + R_2 + R_5 & -R_5 \\
-R_3 & -R_5 & R_3 + R_4 + R_5
\end{pmatrix}
$$

### (5)

$$
\Delta I_2 = 
\begin{vmatrix}
R_1 + R_3 & E & -R_3 \\
-R_1 & 0 & -R_5 \\
-R_3 & 0 & R_3 + R_4 + R_5 \\
\end{vmatrix} = E(R_1R_3 + R_1R_5 + R_3R_5 + R_1R_4)
$$

$$
\Delta I_3 = 
\begin{vmatrix}
R_1 + R_3 & -R_1 & E \\
-R_1 & R_1 + R_2 + R_5 & 0 \\
-R_3 & -R_5 0 \\
\end{vmatrix} = E(R_1R_3 + R_1R_5 + R_3R_5 + R_2R_3)
$$

$$
\Delta = 
\begin{vmatrix}
R_1 + R_3 & -R_1 & -R_3 \\
-R_1 & R_1 + R_2 + R_3 & -R_5 \\
-R_3 & -R_5 & R_3 + R_4 + R_5
\end{vmatrix}
$$

$I_2 = \frac{\Delta I_2}{\Delta},I_3 = \frac{\Delta I_3}{\Delta}$ より、

$$
\frac{I_2}{I_3} = \frac{R_1R_3 + R_1R_5 + R_3R_5 + R_1R_4}{R_1R_3 + R_1R_5 + R_3R_5 + R_2R_3}
$$

### (6)
$I_2 = I_3$ より、

$$
(R_1R_3 + R_1R_5 + R_3R_5 + R_1R_4)E = (R_1R_3 + R_1R_5 + R_3R_5 + R_2R_3)E
$$

従って、

$$
R_1R_4 = R_2R_3
$$

### (7)
$R_5$ に電流が流れないので、

$$
I_1 = (\frac{1}{R_1 + R_3} + \frac{1}{R_2 + R_4})E
$$

従って、

$$
I_2 = \frac{E}{R_2 + R_4}
$$