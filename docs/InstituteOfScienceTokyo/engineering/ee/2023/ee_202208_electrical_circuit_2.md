---
sidebar_label: 2022年8月実施 電気回路2
tags:
  - InstituteOfScienceTokyo
  - Electrical-Electronic.Circuits.Kirchhoff-Laws
  - Electrical-Electronic.Circuits.Mesh-Analysis
  - Electrical-Electronic.Circuits.Wheatstone-Bridge
---
# 東京工業大学 工学院 電気電子系 2022年8月実施 電気回路2


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
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/InstituteOfScienceTokyo/engineering/ee_202208_electrical_circuit_2_p1.png" width="400" alt=""/>
</figure>

### 题目描述

考虑原 Description 图 2.1 所示电路。它由五个非零有限电阻 $R_1,R_2,R_3,R_4,R_5$ 和电压源 $E$ 构成；电流 $I_1,I_2,I_3$ 的正方向及闭路 A、B、C 均按图中箭头和标注定义。

1. 对闭路 A 应用电压平衡，写出电阻压降与电源电动势相平衡的方程，填写答题纸方框。
2. 对闭路 B 写出电阻压降关系，填写方框。
3. 对闭路 C 写出电阻压降关系，填写方框。
4. 第 1 至第 3 问方程可写为

   $$
   \begin{pmatrix}
   a_{11}&a_{12}&a_{13}\\
   a_{21}&a_{22}&a_{23}\\
   a_{31}&a_{32}&a_{33}
   \end{pmatrix}
   \begin{pmatrix}I_1\\I_2\\I_3\end{pmatrix}
   =
   \begin{pmatrix}E\\0\\0\end{pmatrix}.
   $$

   用 $R_1,\ldots,R_5$ 写出系数矩阵；三行依次对应闭路 A、B、C。
5. 用 $R_1,\ldots,R_5$ 表示 $I_2/I_3$，并写出推导过程。
6. 当流过 $R_5$ 的电流为 $0$ 时，求 $R_1,R_2,R_3,R_4$ 必须满足的条件。
7. 在第 6 问条件下，用 $R_1,R_2,R_3,R_4,E$ 中必要的量表示 $I_1,I_2$。

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
