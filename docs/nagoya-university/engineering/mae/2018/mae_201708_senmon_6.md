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

### (1)

図1は 1 段、図2は 2 段、図3は一般の $n$ 段の抵抗ラダー回路である。各節点への横枝は $2R$、縦方向の抵抗はすべて $R$、開放端 A への最上部の横枝も $R$ とする。下端を基準電位とし、電圧源を $V$ とする。

1. 図1の開放端子電圧 $E_1$ を求めよ。
2. 図2の開放端子電圧 $E_2$ を求めよ。
3. 図3の $E_n$ を $E_{n-1}$ を用いて表せ。
4. $E_n$ を $n,V$ で表せ。

![抵抗ラダーの 1 段、2 段、n 段の配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/nagoya201708_specialist6_ladder.svg)

### (2)

図4の交流回路において、電圧源のフェーザを $\dot E$、角周波数を $\omega$、抵抗を $R$、二つのコイルの自己インダクタンスをともに $L$、相互インダクタンスを $M$ とする。図のドットは各コイルの上端にある。$\dot I_1$ は左枝を下向き、$\dot I_2$ は右の抵抗を上端から下端へ流れる向きを正とする。

1. $M=0$ のときの $\dot I_1,\dot I_2$ を求めよ。
2. $M>0$ を考慮したときの $\dot I_1,\dot I_2$ を求めよ。

![相互誘導回路の電圧・電流方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/nagoya201708_specialist6_mutual.svg)

### (3)

次の定義の F 行列を用いる。出力電流 $\dot I_2$ は二端子対回路から負荷へ向かう方向を正とする。

$$
\begin{pmatrix}\dot E_1\\\dot I_1\end{pmatrix}
=\begin{pmatrix}\dot A&\dot B\\\dot C&\dot D\end{pmatrix}
\begin{pmatrix}\dot E_2\\\dot I_2\end{pmatrix}.
$$

図5は入力端に $L$ と $C$ の並列枝を持ち、その後に容量 $C$ の直列コンデンサを置く。図6は入力端・出力端にそれぞれ $L$ と $C$ の並列枝を持ち、その間に容量 $C/2$ の直列コンデンサを置く。両回路の F 行列を求めよ。

![図5と図6の二端子対回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/nagoya201708_specialist6_twoport.svg)

#### 题目描述

（1）电源为 $V$，梯形网络横向支路为 $2R$，纵向电阻全部为 $R$，连接开路端 A 的最上横支路也为 $R$，下端为参考电位。求图示 1 段与 2 段网络的开路电压 $E_1,E_2$，用 $E_{n-1}$ 表示一般 $n$ 段电压 $E_n$，再求 $E_n$ 关于 $n,V$ 的显式表达式。（2）图中交流电源为相量 $\dot E$、角频率为 $\omega$，电阻均为 $R$，两个线圈的自感均为 $L$，互感为 $M$，同名端均在上端。左支路向下电流为 $\dot I_1$，右侧电阻由上到下的电流为 $\dot I_2$。分别在 $M=0$ 和 $M>0$ 时求二者。（3）按上列链参数定义，输出电流正向由网络流向负载。图5为输入端 $L,C$ 并联支路加串联电容 $C$；图6为两端各有 $L,C$ 并联支路，中间串联电容 $C/2$。求两个网络的 F 矩阵。

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
F_6=\begin{pmatrix}1&0\\Y&1\end{pmatrix}
\begin{pmatrix}1&2Z\\0&1\end{pmatrix}
\begin{pmatrix}1&0\\Y&1\end{pmatrix}
=\begin{pmatrix}1+2ZY&2Z\\2Y(1+ZY)&1+2ZY\end{pmatrix}.
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
