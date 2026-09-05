---
sidebar_label: "2023年8月実施 力学 [2]"
tags:
  - Waseda-University
---
# 早稲田大学 基幹理工学研究科 機械科学・航空宇宙専攻 2023年8月実施 力学 \[2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

問題の要約 — [大学公表問題の力学・問題2](https://www.waseda.jp/inst/admission/assets/uploads/2023/11/51_M_kikaikagaku_2023_September2024_April_ippan_senmon.pdf)

長さがともに $L$ の質量のない糸で、上から質量 $m,M$ の二つの質点を吊るす。固定点を原点、右向きを $x$、上向きを $y$ とし、鉛直下向きからの二本の糸の角をそれぞれ $\theta_1,\theta_2$ とする。糸はたるまず、摩擦はなく、重力加速度は $g$ である。

1. 二質点の座標を角度で表す。
2. 上下の糸の張力を $T_1,T_2$ としてニュートンの運動方程式を書く。
3. 以下は微小振動とする。張力の主要項を求め、角度に関する線形運動方程式を導く。
4. 同じ振動数の調和振動を代入して、振幅 $A_1,A_2$ の方程式を書く。
5. 非零の振幅を持つ条件を示す。
6. 固有角振動数と各振幅比を求める。
7. 各モードの動きを図で説明する。

![二重振り子の座標と二つの正常モードの独自の模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/waseda_university/FSE/kikaikagaku/2024/waseda-2023-double-pendulum.svg)

### 题目描述

用两条长度均为 $L$ 的无质量绳，将质量分别为 $m,M$ 的两质点从上到下串联悬挂。固定点为原点，$x$ 轴向右、$y$ 轴向上，两条绳相对竖直向下方向的角度分别为 $\theta_1,\theta_2$。绳始终绷紧，无摩擦，重力加速度为 $g$。

1. 用角度表示两个质点的坐标。
2. 设上下两条绳的张力分别为 $T_1,T_2$，写出 Newton 运动方程。
3. 在微小振动近似下，求张力的主要项，并导出角度的线性运动方程。
4. 代入同频简谐振动，写出振幅 $A_1,A_2$ 满足的方程。
5. 给出存在非零振幅解的条件。
6. 求固有角频率和各模态的振幅比。
7. 结合示意图说明两种正常模态的运动。

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

$$T_1=(m+M)g,\qquad T_2=Mg.$$

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

$\theta_j=\operatorname{Re}\{A_j e^{i(\omega t-\phi)}\}$ を代入すると

$$
\begin{pmatrix}
(m+M)g-mL\omega^2&-Mg\\
-L\omega^2&g-L\omega^2
\end{pmatrix}
\begin{pmatrix}A_1\\A_2\end{pmatrix}=0.
$$

### (5)

係数行列の行列式が零であること、すなわち

$$mL^2\omega^4-2(m+M)gL\omega^2+(m+M)g^2=0$$

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

低い振動数のモードでは二本の糸が同じ方向へ傾き、高い振動数のモードでは逆方向へ傾く。微小角では

$$x_1\simeq L\theta_1,\qquad x_2\simeq L(\theta_1+\theta_2).$$

従って $A_1>0$ の最大変位時、低振動数では $x_2=(1+\rho)x_1$、高振動数では $x_2=(1-\rho)x_1<0$ となる。上図のモードは例として $m=M$、従って $\rho=\sqrt2$ として描いたもので、各位置から平衡点を挟んで左右に振動する。

### 既存の参考文献

[後藤ら「詳解 力学演習」§11 問題[1]](https://www.amazon.co.jp/dp/4320030257/ref=nosim?tag=msscee0a-22)
