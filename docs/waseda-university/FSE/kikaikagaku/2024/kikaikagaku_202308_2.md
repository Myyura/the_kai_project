---
sidebar_label: "2023年8月実施 力学 [2]"
tags:
  - Waseda-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Connected-Particles-and-Tension
---
# 早稲田大学 基幹理工学研究科 機械科学・航空宇宙専攻 2023年8月実施 力学 \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

二重振り子の力学模型として、図1のような2質点系の運動を考える。
原点 $O$ から長さ $L$ の糸で吊り下げられた質量 $m$ の質点があり、更に、長さ $L$ の糸で吊り下げられた質量 $M$ の質点がある。水平方向を $x$ 軸、鉛直上方を $y$ 軸として、糸がたるむことなく $x$–$y$ 平面内の運動を行うものとする。糸の質量はないものとし、摩擦無く運動できるとする。重力加速度を $g$ とする。

![図1 二重振り子の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/waseda-university/FSE/kikaikagaku/2024/kikaikagaku_202308_2_original_figure_1.png)

(1) 質量 $m$ の質点の座標を $(x_1,y_1)$、この質点を吊るす糸と鉛直下方とのなす角を $\theta_1$ とするとき、$x_1$ と $y_1$ を $\theta_1$ を用いて表しなさい。更に、質量 $M$ の質点の座標を $(x_2,y_2)$、この質点を吊るす糸と鉛直下方とのなす角を $\theta_2$ とするとき、$x_2$ と $y_2$ を $\theta_1$、$\theta_2$ を用いて表しなさい。
答えのみ示せばよい。

(2) 質量 $m$ の質点を吊るす糸の張力を $T_1$、質量 $M$ の質点を吊るす糸の張力を $T_2$ とするとき、2質点の位置 $x_1$、$y_1$、$x_2$、$y_2$ に関する運動方程式を求めなさい。時間微分はドットで記し（ニュートンの記法）、答えのみ示せばよい。

(3) 本設問以降では、振れ角が小さく、$\sin\theta_1\approx\theta_1$、$\sin\theta_2\approx\theta_2$、$\cos\theta_1\approx1$、$\cos\theta_2\approx1$ と近似できるとする。この場合における糸の張力 $T_1$、$T_2$ を求めなさい。更に、設問 (1) の関係を用いて整理し、$\theta_1$、$\theta_2$ に関する運動方程式を示しなさい。

(4) 設問 (3) で求めた運動方程式の解が、$\theta_1=A_1\exp(i\omega t-\phi)$、$\theta_2=A_2\exp(i\omega t-\phi)$ の形で書けるとする。運動方程式に代入して整理した式を示しなさい。$i$ は虚数単位とし、$t$ は時間とし、$A_1$、$A_2$、$\omega$、$\phi$ は定数とする。

(5) 設問 (4) で整理した式が、$A_1$、$A_2$ に関して非自明解をもつための条件を示しなさい。

(6) 全ての固有角振動数を求めなさい。更に、各々の固有角振動数に対応するモードについて、定数 $A_1$、$A_2$ が満たす関係を示しなさい。

(7) 各モードの運動について、図を描き説明しなさい。

### 题目描述

作为双摆的力学模型，考虑图1所示的两质点系统的运动。
从原点 $O$ 用长为 $L$ 的绳悬挂一个质量为 $m$ 的质点，再用长为 $L$ 的绳悬挂一个质量为 $M$ 的质点。水平方向为 $x$ 轴、竖直向上方向为 $y$ 轴，设绳始终不松弛，系统在 $x$–$y$ 平面内运动。绳的质量为零，系统可无摩擦地运动。重力加速度为 $g$。

(1) 设质量为 $m$ 的质点的坐标为 $(x_1,y_1)$，悬挂该质点的绳与竖直向下方向的夹角为 $\theta_1$，用 $\theta_1$ 表示 $x_1$ 和 $y_1$。再设质量为 $M$ 的质点的坐标为 $(x_2,y_2)$，悬挂该质点的绳与竖直向下方向的夹角为 $\theta_2$，用 $\theta_1$、$\theta_2$ 表示 $x_2$ 和 $y_2$。
只需写出答案。

(2) 设悬挂质量为 $m$ 的质点的绳的张力为 $T_1$，悬挂质量为 $M$ 的质点的绳的张力为 $T_2$，求关于两质点位置 $x_1$、$y_1$、$x_2$、$y_2$ 的运动方程。时间微分用上点表示（牛顿记号），只需写出答案。

(3) 从本问开始，设摆角很小，可以作近似 $\sin\theta_1\approx\theta_1$、$\sin\theta_2\approx\theta_2$、$\cos\theta_1\approx1$、$\cos\theta_2\approx1$。求此时绳的张力 $T_1$、$T_2$。再利用问题 (1) 中的关系整理，给出关于 $\theta_1$、$\theta_2$ 的运动方程。

(4) 假设问题 (3) 中求得的运动方程的解可写成 $\theta_1=A_1\exp(i\omega t-\phi)$、$\theta_2=A_2\exp(i\omega t-\phi)$ 的形式。将其代入运动方程，写出整理后的式子。其中，$i$ 为虚数单位，$t$ 为时间，$A_1$、$A_2$、$\omega$、$\phi$ 为常数。

(5) 给出问题 (4) 中整理得到的方程关于 $A_1$、$A_2$ 存在非平凡解的条件。

(6) 求所有固有角频率。再对各固有角频率对应的模态，给出常数 $A_1$、$A_2$ 应满足的关系。

(7) 绘图并说明各模态的运动。

## **Kai**

以下は補充した解答である。既存の参考文献は末尾に残した。$m,M,L,g>0$ とする。

### (1)

$$
\begin{aligned}
x_1&=L\sin\theta_1,&y_1&=-L\cos\theta_1,\\
x_2&=L(\sin\theta_1+\sin\theta_2),&y_2&=-L(\cos\theta_1+\cos\theta_2).
\end{aligned}
$$

### (2)

$$
\begin{aligned}
m\ddot x_1&=-T_1\sin\theta_1+T_2\sin\theta_2,\\
m\ddot y_1&=T_1\cos\theta_1-T_2\cos\theta_2-mg,\\
M\ddot x_2&=-T_2\sin\theta_2,\\
M\ddot y_2&=T_2\cos\theta_2-Mg.
\end{aligned}
$$

### (3)

一次の微小振動では鉛直加速度が零なので、張力の主要項は

$$
T_1=(m+M)g,\qquad T_2=Mg.
$$

水平の式に代入すると

$$
\begin{aligned}
mL\ddot\theta_1+(m+M)g\theta_1-Mg\theta_2&=0,\\
L(\ddot\theta_1+\ddot\theta_2)+g\theta_2&=0.
\end{aligned}
$$

これらは対称な形では

$$
L\begin{pmatrix}m+M&M\\M&M\end{pmatrix}
\begin{pmatrix}\ddot\theta_1\\\ddot\theta_2\end{pmatrix}
+g\begin{pmatrix}m+M&0\\0&M\end{pmatrix}
\begin{pmatrix}\theta_1\\\theta_2\end{pmatrix}=0
$$

と書ける。張力は有限振幅では一定でなく、上式は一次近似である。

### (4)

設問の複素表示 $\theta_j=A_j e^{i\omega t-\phi}$ を代入すると

$$
\begin{pmatrix}
(m+M)g-mL\omega^2&-Mg\\
-L\omega^2&g-L\omega^2
\end{pmatrix}
\begin{pmatrix}A_1\\A_2\end{pmatrix}=0.
$$

### (5)

係数行列の行列式が零であること、すなわち

$$
mL^2\omega^4-2(m+M)gL\omega^2+(m+M)g^2=0
$$

が必要十分である。

### (6)

正の固有角振動数は

$$
\omega_\mp=\sqrt{\frac gL\frac{m+M\mp\sqrt{M(m+M)}}m}.
$$

$\rho=\sqrt{(m+M)/M}>1$ と置くと、対応する振幅比は

$$
\omega_-:\ A_2=\rho A_1,\qquad
\omega_+:\ A_2=-\rho A_1.
$$

負の $\omega$ は同じ実振動を逆向きの複素表示にしたもので、独立なモードではない。

### (7)

![低い固有角振動数のモード](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/waseda-university/FSE/kikaikagaku/2024/kikaikagaku_202308_2_mode_low.svg)

![高い固有角振動数のモード](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/waseda-university/FSE/kikaikagaku/2024/kikaikagaku_202308_2_mode_high.svg)

低い振動数のモードでは二本の糸が同じ方向へ傾き、高い振動数のモードでは逆方向へ傾く。微小角では

$$
x_1\simeq L\theta_1,\qquad x_2\simeq L(\theta_1+\theta_2).
$$

従って $A_1>0$ の最大変位時、低振動数では $x_2=(1+\rho)x_1$、高振動数では $x_2=(1-\rho)x_1<0$ となる。上図のモードは例として $m=M$、従って $\rho=\sqrt2$ として描いたもので、各位置から平衡点を挟んで左右に振動する。

## **Reference**

[後藤ら「詳解 力学演習」§11 問題[1]](https://www.amazon.co.jp/dp/4320030257/ref=nosim?tag=msscee0a-22)

- [大学公式問題（2023年9月・2024年4月入学、PDF 3ページ）](https://www.waseda.jp/inst/admission/assets/uploads/2023/11/51_M_kikaikagaku_2023_September2024_April_ippan_senmon.pdf)
- [公開保存版（同名原卷）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/50e383d57ebcb2cbc3fed0cecf3c96e9c8b2564e/assets/past-papers/documents/f071ede7f4b9578308183dec9a5ad5a67f909128ad2d52cf60c3be65b475da71.pdf)
