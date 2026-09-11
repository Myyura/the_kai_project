---
sidebar_label: '2020年8月実施 物理学2'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
  - Physics.Electromagnetism.Magnetic-Force
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
---

# 東京大学 工学系研究科 2020年8月実施 物理学2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

真空中の鉛直上向き（$+z$ 方向）の一様磁場 $B$ 内に、幅 $d$ の十分長い U 字型導線 $\alpha\beta\beta'\alpha'$ を水平に置く。平行なレール $\alpha\beta,\alpha'\beta'$ は $y$ 軸に平行で、$\beta\beta'$ はそれらに垂直である。質量 $m$ の金属棒 $\lambda\mu$ は両レールとそれぞれ $\lambda',\mu'$ で接触し、常に $\beta\beta'$ に平行である。導線の抵抗は零、棒の接触点間（長さ $d$）の抵抗は $R$ とする。棒の太さ、摩擦、接触抵抗、電流が作る磁場は無視する。

I. 棒の重心に一定の外力 $F$ が $+y$ 方向に働き、棒が一定速度 $v$ で動く。

1. 棒を流れる電流 $I$ を $v$ で表せ。
2. $v$ を $F$ で表せ。
3. 単位時間あたりの Joule 熱と外力のする仕事を求め、エネルギー保存則を確かめよ。

II. 導線の $\beta\beta'$ 部分に容量 $C$ のコンデンサーを入れる。$t=0$ に棒の重心に瞬間的な外力を $+y$ 方向に加え、初速を与える。以後の棒の速度を $v(t)$、コンデンサーの電荷を $Q(t)$ とし、$Q(0)=0$ とする。

1. 電流 $I(t)$ を $Q(t),v(t)$ の両方で表せ。
2. 棒の加速度 $a(t)$ を $Q(t),v(t)$ の両方で表せ。
3. $v(0)=v_0$ のとき、$I(t)$ を求めよ。
![一様磁場中で動く導体棒とコンデンサー付き回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2021/kyotsu_202008_phys_2_rod_audited.svg)

#### 题目描述

在真空中沿 $+z$ 方向的均匀磁场 $B$ 内，水平放置宽度为 $d$ 的 U 形长导轨 $\alpha\beta\beta'\alpha'$。两条平行导轨沿 $y$ 方向，连接段 $\beta\beta'$ 与其垂直。质量为 $m$ 的金属棒 $\lambda\mu$ 横跨导轨，在 $\lambda',\mu'$ 接触，始终与连接段平行。导轨无电阻，棒两接触点之间长度为 $d$、电阻为 $R$。忽略棒的粗细、摩擦、接触电阻和电流自身产生的磁场。

I. 对棒施加沿 $+y$ 方向的恒力 $F$，使其以恒速 $v$ 运动。

1. 用 $v$ 表示棒中电流 $I$。
2. 用 $F$ 表示 $v$。
3. 求焦耳热功率和外力做功功率，验证能量守恒。

II. 在连接段 $\beta\beta'$ 中接入电容为 $C$ 的电容器。于 $t=0$ 对棒施加沿 $+y$ 的瞬时冲量，之后无外力驱动。记速度为 $v(t)$，电容器电荷为 $Q(t)$，且 $Q(0)=0$。

1. 用 $Q(t),v(t)$ 表示电流 $I(t)$。
2. 用 $Q(t),v(t)$ 表示加速度 $a(t)$。
3. 若 $v(0)=v_0$，求 $I(t)$。

## **Kai**

電流の正方向を棒上で $\mu'\to\lambda'$ とし、その電流が充電する向きに $Q$ の符号を定める。

### I.

1. 運動起電力は $Bdv$ だから

$$
\boxed{I=\frac{Bdv}{R}}.
$$

2. 棒に働く磁気力は $-BId\,\boldsymbol e_y$。等速条件 $F=BId$ より

$$
\boxed{v=\frac{FR}{B^2d^2}}.
$$

3. Joule 熱と外力の仕事の率は

$$
\boxed{P_J=I^2R=\frac{B^2d^2v^2}{R},\qquad
P_F=Fv=\frac{B^2d^2v^2}{R}}.
$$

運動エネルギーは一定で、外力の仕事はすべて熱になる。

### II.

1. 回路の電圧則 $Bdv=RI+Q/C$ より

$$
\boxed{I(t)=\frac1R\left(Bdv(t)-\frac{Q(t)}C\right)},\qquad I=\dot Q.
$$

2. $ma=-BdI$ なので

$$
\boxed{a(t)=-\frac{Bd}{mR}\left(Bdv(t)-\frac{Q(t)}C\right)}.
$$

3. 電圧則を微分し、$m\dot v=-BdI$、$\dot Q=I$ を代入すると

$$
R\dot I=-\left(\frac{B^2d^2}{m}+\frac1C\right)I.
$$

初期条件は $I(0)=Bdv_0/R$。したがって

$$
\boxed{I(t)=\frac{Bdv_0}{R}\exp\left[-\frac{m+B^2d^2C}{mRC}\,t\right]}.
$$

