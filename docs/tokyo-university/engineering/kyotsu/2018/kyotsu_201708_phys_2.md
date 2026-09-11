---
sidebar_label: '2017年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
  - Physics.Electromagnetism.RLC-Series-Resonance
---

# 東京大学 工学系研究科 2017年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

真空中に長さ $a$、幅 $b$、電極間距離 $d\ (d\ll a,b)$ の平行平板コンデンサがある。真空の誘電率を $\varepsilon_0$ とする。長さ $a/2$、幅 $b$、厚さ $d$、誘電率 $\varepsilon>\varepsilon_0$ の誘電体を挿入する。誘電体の左端の位置を $x\ (0\le x<a)$ とし、摩擦なく動かせる。$0\le x\le a/2$ では誘電体全体が電極の間にあり、$a/2<x<a$ では一部が右側にはみ出す。

スイッチで端子 A、B、C のいずれかを選び、図の三つの回路に接続する。図示したもの以外の容量、インダクタンス、抵抗は無視する。

![部分挿入した誘電体と三つの接続回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2018/kyotsu_201708_phys_2_capacitor_circuits_audited.svg)

### I

A に接続して十分時間が経過した。定圧直流電源の電圧を $V_1$ とする。

1. 全静電容量 $C(x)$ を $0\le x<a$ で求めよ。
2. コンデンサに蓄えられるエネルギー $U(x)$ を $0\le x<a$ で求めよ。
3. $a/2<x<a$ で誘電体をゆっくり $\Delta x$ 動かすとき、蓄えられる電荷量の変化 $\Delta Q(x)$ を求めよ。
4. 誘電体に作用する水平方向の力 $F_1(x)$ を求めよ。$x$ が増える向きを正とする。

各式は $x,\varepsilon_0,\varepsilon,a,b,d,V_1$（3 ではさらに $\Delta x$）のうち必要なものを用いて表せ。

### II

誘電体の位置を $x=3a/4$ に設定し、A に接続して十分時間が経過した後、B に切り替える。B の抵抗を $R_1$、切替時刻を $t=0$ とする。誘電体に働く力 $F_2(t)$ を求めよ。力の正方向は I.4 と同じである。$R_1$ は十分大きく、変位電流による磁場は無視できる。

### III

C に接続する。抵抗を $R_2$、コイルのインダクタンスを $L$、交流電源を $V(t)=V_2\sin\omega t$ とする。

1. 抵抗 $R_2$ で消費される電力の実効値 $P_2(x)$ が $0\le x<a$ で極大値を持つための $L$ の条件を、$\varepsilon_0,\varepsilon,a,b,d,V_2,R_2,\omega$ のうち必要なものを用いて示せ。
2. この条件の下で $P_2(x)$ を最大に調整したとき、コンデンサ両端の電圧と電源電圧の波形を同じグラフに例示し、両者の関係の物理的意味を説明せよ。

#### 题目描述

真空中有长 $a$、宽 $b$、极板间距 $d\ll a,b$ 的平行板电容器，真空介电常数为 $\varepsilon_0$。插入长 $a/2$、宽 $b$、厚 $d$、介电常数 $\varepsilon>\varepsilon_0$ 的介质。介质左端位置为 $x\ (0\le x<a)$，可无摩擦移动。$0\le x\le a/2$ 时介质全部位于板间；$a/2<x<a$ 时部分伸出右侧。通过开关连接端子 A、B 或 C，选择图示三种电路。忽略图示以外的电容、电感和电阻。

I. 连接 A 足够久，恒压直流源电压为 $V_1$。

1. 求 $0\le x<a$ 内的总电容 $C(x)$。
2. 求同一区间内储存的能量 $U(x)$。
3. 在 $a/2<x<a$ 内缓慢移动 $\Delta x$ 时，求储存电荷量的变化 $\Delta Q(x)$。
4. 求介质受到的水平力 $F_1(x)$，以 $x$ 增大方向为正。

各式使用 $x,\varepsilon_0,\varepsilon,a,b,d,V_1$ 中所需的量，第 3 小问还可使用 $\Delta x$。

II. 将介质位置设为 $x=3a/4$，连接 A 足够久后，在 $t=0$ 切换至 B。B 中的电阻为 $R_1$。求作用在介质上的力 $F_2(t)$，正方向与 I.4 相同。$R_1$ 足够大，可忽略位移电流产生的磁场。

III. 连接 C，电阻为 $R_2$、线圈电感为 $L$，交流电源为 $V(t)=V_2\sin\omega t$。

1. 求使电阻 $R_2$ 消耗功率的有效值 $P_2(x)$ 在 $0\le x<a$ 内具有极大值的 $L$ 的条件，用 $\varepsilon_0,\varepsilon,a,b,d,V_2,R_2,\omega$ 中所需的量表示。
2. 在该条件下把 $P_2(x)$ 调至最大，举例在同一图中画出电容器两端与电源的电压波形，说明二者关系的物理含义。

## **Kai**

### I

1. 誘電体部分と真空部分は並列接続であるから、

$$
\boxed{C(x)=
\begin{cases}
\dfrac{ab(\varepsilon+\varepsilon_0)}{2d},&0\le x\le a/2,\\[5pt]
\dfrac b d[\varepsilon(a-x)+\varepsilon_0x],&a/2<x<a.
\end{cases}}
$$

2. 電圧が一定なので、

$$
\boxed{U(x)=\frac12C(x)V_1^2}.
$$

3. $\Delta Q=V_1\Delta C$ より、

$$
\boxed{\Delta Q=-\frac{b(\varepsilon-\varepsilon_0)V_1}{d}\Delta x}.
$$

4. 電源が供給する仕事は $V_1\,dQ$ であり、$V_1\,dQ=dU+F_1\,dx$。よって、

$$
F_1=\frac12V_1^2\frac{dC}{dx}
=\boxed{\begin{cases}
0,&0\le x<a/2,\\[3pt]
-\dfrac{b(\varepsilon-\varepsilon_0)V_1^2}{2d},&a/2<x<a.
\end{cases}}
$$

誘電体は電極間へ引き込まれる。端効果を無視した近似では $x=a/2$ に折れ点があり、力は左右の極限で与えられる。

### II

設定された位置での容量は

$$
C_*=C(3a/4)=\frac{ab(\varepsilon+3\varepsilon_0)}{4d}.
$$

放電中の電圧は $V_C(t)=V_1e^{-t/(R_1C_*)}$。瞬間の電場が及ぼす力は $F_2=(V_C^2/2)C'(3a/4)$ なので、

$$
\boxed{F_2(t)=-\frac{b(\varepsilon-\varepsilon_0)V_1^2}{2d}
\exp\left[-\frac{8dt}{R_1ab(\varepsilon+3\varepsilon_0)}\right]}.
$$

### III

1. 直列回路のインピーダンスは

$$
Z=R_2+i\left(\omega L-\frac1{\omega C(x)}\right).
$$

したがって平均消費電力は

$$
P_2(x)=\frac{V_2^2R_2}
{2\left[R_2^2+\left(\omega L-\dfrac1{\omega C(x)}\right)^2\right]}.
$$

共振 $\omega^2LC(x)=1$ で最大値 $V_2^2/(2R_2)$ を取る。容量の範囲は

$$
\frac{\varepsilon_0ab}{d}<C(x)\le\frac{ab(\varepsilon+\varepsilon_0)}{2d}.
$$

従って、共振点が可動範囲に存在する条件は

$$
\boxed{\frac{2d}{\omega^2ab(\varepsilon+\varepsilon_0)}
\le L<\frac{d}{\omega^2\varepsilon_0ab}}.
$$

$a/2<x<a$ に孤立した極大点を持つ条件では、左側の不等号も厳密な $<$ となる。左端の等号では $0\le x\le a/2$ 全体で最大値を取る。

2. 共振時の電流は $I=(V_2/R_2)\sin\omega t$ である。$I=C\,dV_C/dt$ より、

$$
\boxed{V_C(t)=-\frac{V_2}{\omega CR_2}\cos\omega t
=\frac{\omega L}{R_2}V_2\sin\left(\omega t-\frac\pi2\right)}.
$$

コンデンサ電圧は電源電圧より $\pi/2$ 遅れる。コイル電圧はコンデンサ電圧と逆位相で打ち消し合い、電源電圧は抵抗の電圧に等しい。電圧振幅比は $\omega L/R_2$ であり、1 を超えることもある。

![共振時の電源電圧とコンデンサ電圧](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2018/kyotsu_201708_phys_2_resonance_audited.svg)

