---
sidebar_label: "2017年8月実施 専門部門 問題6（電気回路）"
tags:
  - Nagoya-University
  - Electrical-Electronic.Circuits.Nodal-Analysis
  - Electrical-Electronic.Circuits.Mutual-Inductance
  - Electrical-Electronic.Circuits.Two-Port-Network
---

# 名古屋大学 工学研究科 機械航空系 2017年8月実施 専門部門 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

**問題6.** 以下の問いに答えよ。ただし，変数上部の「・」は複素数表示を意味する。

**(1)** 図1，図2，図3のように抵抗がはしご状に接続された回路がある。

**1)** 図1において電圧 $E_1$ を求めよ。

**2)** 図2において電圧 $E_2$ を求めよ。

**3)** 図3において電圧 $E_n$ を $E_{n-1}$ を用いて表せ。

**4)** 図3において電圧 $E_n$ を求めよ。

![図1 1段の抵抗回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_6_original_figure_1.png)

![図2 2段の抵抗回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_6_original_figure_2.png)

![図3 n段の抵抗回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_6_original_figure_3.png)

**(2)** 図4に示す回路がある。交流電圧源 $\dot E$ の角周波数を $\omega$ とする。また，$M$ を相互インダクタンスとする。

**1)** $M=0$ のとき，$\dot I_1$ と $\dot I_2$ を $L,R,\dot E,\omega$ を用いて表せ。

**2)** $M>0$ のとき，$\dot I_1$ と $\dot I_2$ を $L,M,R,\dot E,\omega$ を用いて表せ。

![図4 相互インダクタンスを含む回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_6_original_figure_4.png)

**(3)** 図5，図6に示す回路がある。交流電圧源の角周波数を $\omega$ とする。

**1)** 図5の四端子定数を求めよ。

**2)** 図6の四端子定数を求めよ。

![図5 四端子回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_6_original_figure_5.png)

![図6 四端子回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_6_original_figure_6.png)

#### 题目描述

**问题6.** 回答下列问题。变量上方的“・”表示复数形式。

**(1)** 有图1、图2、图3所示电阻按梯形连接的电路。

**1)** 求图1中的电压 $E_1$。

**2)** 求图2中的电压 $E_2$。

**3)** 用 $E_{n-1}$ 表示图3中的电压 $E_n$。

**4)** 求图3中的电压 $E_n$。

图1、图2、图3分别为1级、2级、$n$ 级电阻梯形电路，图中保留了全部阻值和节点连接。

**(2)** 考虑图4所示电路。交流电压源 $\dot E$ 的角频率为 $\omega$，互感为 $M$。

**1)** 当 $M=0$ 时，用 $L,R,\dot E,\omega$ 表示 $\dot I_1,\dot I_2$。

**2)** 当 $M>0$ 时，用 $L,M,R,\dot E,\omega$ 表示 $\dot I_1,\dot I_2$。

图4给出了两回路的连接、互感同名端和电流参考方向。

**(3)** 考虑图5、图6所示电路，交流电压源的角频率为 $\omega$。

**1)** 求图5的四端子参数。

**2)** 求图6的四端子参数。

图5、图6给出了端口编号、电压电流参考方向以及各电感和电容的连接。

## **Kai**

### (1)

下段をテブナン等価に置き換える。1 段の場合、端子 A から下方を見た回路は開放電圧 $V/2$、等価抵抗 $R$ となる。A はこの等価源と $V$ を等しい抵抗 $R$ を介して結ぶ中点だから

$$
\boxed{E_1=\frac{V+V/2}{2}=\frac34V}.
$$

段を一つ加えても同じ等価抵抗の関係が保たれ、

$$
E_n=\frac{V+E_{n-1}}2,\qquad E_0=\frac V2.
$$

従って

$$
\boxed{E_2=\frac78V},\qquad
\boxed{E_n=\left(1-\frac1{2^{n+1}}\right)V}.
$$

### (2)

左コイルはドットへ $\dot I_1$ が流れ込むのに対し、右コイルはドットから $\dot I_1+\dot I_2$ が流れ出す。したがって右端と下端の電位差は

$$
R\dot I_2=j\omega M\dot I_1-j\omega L(\dot I_1+\dot I_2).
$$

また、左端から右端へのループについて

$$
\dot E=(R+j\omega L-j\omega M)\dot I_1-(R+j\omega M)\dot I_2.
$$

これらを連立する。

#### 1)

$M=0$ として

$$
\boxed{\dot I_1=\frac{(R+j\omega L)\dot E}{R^2-\omega^2L^2+j3\omega LR}},
\qquad
\boxed{\dot I_2=\frac{-j\omega L\dot E}{R^2-\omega^2L^2+j3\omega LR}}.
$$

#### 2)

$$
\Delta=R^2-\omega^2(L^2-M^2)+j\omega R(3L-2M)
$$

とおくと

$$
\boxed{\dot I_1=\frac{(R+j\omega L)\dot E}{\Delta}},\qquad
\boxed{\dot I_2=\frac{-j\omega(L-M)\dot E}{\Delta}}.
$$

$M\to0$ で 1) に一致する。特に $M=L$ では $\dot I_2=0$、$\dot I_1=\dot E/R$ となり、逆向きの磁化が打ち消し合う。

### (3)

並列枝のアドミタンスを $Y=j(\omega C-1/(\omega L))$、容量 $C$ の直列枝のインピーダンスを $Z=1/(j\omega C)$ とおく。基本行列は

$$
F_{\rm shunt}=\begin{pmatrix}1&0\\Y&1\end{pmatrix},\qquad
F_{\rm series}=\begin{pmatrix}1&Z\\0&1\end{pmatrix}.
$$

#### 図5

$$
F_5=F_{\rm shunt}F_{\rm series}
=\boxed{\begin{pmatrix}
1&-j/(\omega C)\\
j(\omega C-1/(\omega L))&2-1/(\omega^2LC)
\end{pmatrix}}.
$$

#### 図6

直列枝が $C/2$ なのでインピーダンスは $Z'=2Z$。

$$
\begin{gathered}
F_6=\begin{pmatrix}1&0\\Y&1\end{pmatrix}
\begin{pmatrix}1&2Z\\0&1\end{pmatrix}
\begin{pmatrix}1&0\\Y&1\end{pmatrix}\\
=\begin{pmatrix}1+2ZY&2Z\\2Y(1+ZY)&1+2ZY\end{pmatrix}.
\end{gathered}
$$

従って

$$
\boxed{\dot A=\dot D=3-\frac2{\omega^2LC},\qquad\dot B=-\frac{2j}{\omega C}},
$$

$$
\boxed{\dot C=j\left(\omega C-\frac1{\omega L}\right)\left(4-\frac2{\omega^2LC}\right)}.
$$

いずれも $\dot A\dot D-\dot B\dot C=1$ を満たす。

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 7ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
