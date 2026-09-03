---
sidebar_label: 2021年8月実施 電磁気学2
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Circuits.Transmission-Line-and-Impedance-Matching
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Electromagnetic-Wave
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
---
# 東京工業大学 工学院 電気電子系 2021年8月実施 電磁気学2


## **Author**
Zero

## **Description**
図 $2.1$ のような，真空中に $x$ 軸と平行に置かれた完全導体の平行平板線路について考える。平板の幅は $a$, 平板の間隔は $b$ であり,$a \gg b$ である。平板の長さは $x$ 方向に十分長く,平板の厚さは十分薄い。線路の左端部に電源，右端部に負荷を接続した際の，平板間の空間における電磁界について以下の問に答えよ。線路における端部効果は無視する。また，真空の誘電率，透磁率をそれぞれ $\varepsilon_0,\mu_0$ とする。

(1) 電源は直流電流源とし，負荷は短絡とすることで，上の導体に $+I$ 下の導体に $-I$ の電流を $x$ 方向に定常的に流した。以下の問に答えよ。ただし，$y$ 方向の電流分布は一様とする。

- (a) 平板間の空間における磁束密度の大きさを答えよ。また，磁束密度の向きは $x,y,z$ 軸のいずれと平行か答えよ。

- (b) 線路の単位長さあたりのインダクタンス $L$ を求めよ。

(2) 電源は直流電圧源とし，負荷は開放とすることで，上および下の導体に，それぞれ単位長さあたり電荷密度 $+\sigma , -\sigma$ の電荷が生じた。以下の問に答えよ。ただし，$y$ 方向の電荷分布は一様とする。

- (c) 平板間の空間における電界の大きさを答えよ。また，電界の向きは $x,y,z$ 軸のいずれと平行か答えよ。

- (d) 線路の単位長さあたりのキャパシタンス $C$ を求めよ。

(3) 電源は交流電流源とし，負荷は右端部で電流の反射が無いよう整合負荷とした。このとき，線路上の位置 $x$, 時間 $t$ において，角周波数 $\omega$ で上の導体に $+I_0\cos(\omega t - kx)$, 下の導体に $-I_0\cos(\omega t - kx)$ の交流電流が $x$ 方向に定常的に流れ，平板間の空間に平面波が $x$ 方向に伝搬する。以下の問に答えよ。ただし，$y$ 方向の電流分布は一様とし，$k$ は波数とする。また，(f) と (h) は導出過程も記せ。 

- (e) 平板間の空間における磁束密度 $B(x,t)$ を答えよ。

- (f) 電流連続の式より，上の導体の単位長さあたりの電荷密度 $\sigma(x,t)$ を求めよ。

- (g) (f) で求めた電荷密度 $\sigma(x,t)$ より，平板間の空間における電界 $E(x,t)$ を答えよ。 

- (h) (e) と (g) で求めた磁束密度 $B(x,t)$ と電界 $E(x,t)$ について，ファラデーの電磁誘導の法則の微分形を適用して，$\varepsilon_0,\mu_0,\omega,k$ の間に成り立つ関係を導出し，平面波の位相速度を $\varepsilon_0,\mu_0$ を用いて表せ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/institute-of-science-tokyo/engineering/ee_202108_electromagnetism_2_p1.png" width="400" alt=""/>
</figure>

### 题目描述

考虑原 Description 图 2.1 所示、在真空中沿 $x$ 轴放置的完全导体平行板传输线。平板宽度为 $a$、间距为 $b$，且 $a\gg b$；平板沿 $x$ 方向足够长、厚度足够薄。左端接电源、右端接负载，忽略端部效应。真空介电常数、磁导率分别为 $\varepsilon_0,\mu_0$，各轴方向与电流符号以图 2.1 为准。

1. 电源为直流电流源，负载短路；上、下导体分别有沿 $x$ 方向的稳恒电流 $+I,-I$，且沿 $y$ 方向分布均匀。

   1. 求板间磁感应强度的大小，并指出其方向与 $x,y,z$ 中哪一轴平行。
   2. 求传输线单位长度电感 $L$。

2. 电源改为直流电压源，负载开路；上、下导体分别出现单位长度电荷 $+\sigma,-\sigma$，且沿 $y$ 方向分布均匀。

   1. 求板间电场大小，并指出其方向与哪一坐标轴平行。
   2. 求传输线单位长度电容 $C$。

3. 电源改为交流电流源，右端接无电流反射的匹配负载。在位置 $x$、时间 $t$，上、下导体分别有沿 $x$ 方向的交流电流

   $$
   +I_0\cos(\omega t-kx),\qquad
   -I_0\cos(\omega t-kx),
   $$

   且沿 $y$ 方向分布均匀；$k$ 为波数，板间有沿 $x$ 方向传播的平面波。第 2、4 小问须写出推导。

   1. 求板间磁感应强度 $B(x,t)$。
   2. 由电流连续性方程求上导体的单位长度电荷密度 $\sigma(x,t)$。
   3. 由 $\sigma(x,t)$ 求板间电场 $E(x,t)$。
   4. 对所得 $B(x,t),E(x,t)$ 应用 Faraday 电磁感应定律的微分形式，导出 $\varepsilon_0,\mu_0,\omega,k$ 之间的关系，并用 $\varepsilon_0,\mu_0$ 表示平面波相速度。

## **Kai**
### (1)
#### (a)
アンペールの法則より、上下の平板が作る磁界は、

$$
H_y = \frac{I}{2a} \cdot 2 = \frac{I}{a}
$$

従って、

$$
B_y = \frac{\mu_0I}{a} \quad \text{$y$軸正方向}
$$

#### (b)

$$
\varphi = BS = \frac{\mu_0I}{a} \cdot b = \frac{\mu_0Ib}{a}
$$

よって、$\varphi = LI$ より、$L = \frac{\varphi}{I} = \frac{\mu_0b}{a}$。

### (2)
#### (c)

$$
\varepsilon_0E = \sigma \Rightarrow E = \frac{\sigma}{\varepsilon_0}
$$

#### (d)

$$
E = \frac{Q}{\varepsilon_0a},V = Eb = \frac{b}{\varepsilon_0a}Q
$$

$$
C = \frac{Q}{V} = \frac{\varepsilon_0a}{b}
$$

### (3)
#### (e)

$$
B(x,t) = \frac{\mu_0}{a}I_0\cos(\omega t - kx)
$$

#### (f)

$$
\overline{y} = \frac{I_0}{a}\cos(\omega t - kx)\hat{x}
$$

$$
\text{div}\ \overline{y} = \frac{dI}{dx} = \frac{I_0k}{a}\sin(\omega t - kx)
$$

電流連続の式より、

$$
\text{div}\ \overline{y} = -\frac{\partial \sigma}{\partial t}
$$

$$
\frac{I_0k}{a}\sin(\omega t - kx) = -\frac{\partial \sigma}{\partial t}
$$

$$
\begin{aligned}
\sigma &= -\frac{kI_0}{a}\int \sin(\omega t - kx)dt \\
&= \frac{kI_0}{\omega a} \cos(\omega t - kx)
\end{aligned}
$$

#### (g)

$$
E(x,t) = \frac{\sigma}{\varepsilon_0} = \frac{kI_0}{\varepsilon_0a\omega} \cos(\omega t - kx)
$$

#### (h)

$$
\begin{aligned}
E(x,t) &= -\frac{kI_0}{a\varepsilon_0\omega}\cos(\omega t - kx)\hat{z} \\
\text{rot}\mathbb{E} &= \frac{kI_0}{a\varepsilon_0\omega} \cdot \frac{\partial}{\partial x} \cos(\omega t - kx)\hat{y} \\
&= \frac{I_0k^2}{a\varepsilon_0\omega} \sin(\omega t - kx)\hat{y} \\
\frac{\partial \mathbb{B}}{\partial t} &= -\frac{\mu_0I_0\omega}{a}\sin(\omega t - kx)\hat{y} \\
\text{rot}\mathbb{E} &= -\frac{\partial \mathbb{B}}{\partial t}
\end{aligned}
$$

$$
\frac{I_0k^2}{a\varepsilon_0\omega}\sin(\omega t - kx)\hat{y} = \frac{\mu_0I\omega}{a}\sin(\omega t - kx)\hat{y}
$$

従って、

$$
\frac{\omega^2}{k^2} = \frac{1}{\varepsilon_0\mu_0}\Rightarrow v = \frac{\omega}{k} = \frac{1}{\sqrt{\varepsilon_0\mu_0}}
$$
