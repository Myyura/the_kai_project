---
sidebar_label: "2022年8月実施 電磁気学1"
sidebar_position: 15
tags:
  - TITech
  - Electromagnetism
---
# 東京工業大学 工学院 電気電子系 2022年8月実施 電磁気学1

## **Author**
Zero

## **Description**
真空中に固定された平行平板コンデンサについて，以下の問に答えよ。真空の誘電率を $\varepsilon_0$ とし，端部効果は無視できるものとする。

(1) 図 $1.1$ のように，厚さが無視できる辺の長さが $a$ と $b$ の長方形導体板を間隔 $x$ で平行においたコンデンサがある。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electromagnetism_1_p1.png" width="350" alt=""/>
</figure>

① このコンデンサの静電容量 $C_1$ を $a,b,x,\varepsilon_0$ を用いて表せ。

② $2$ つの導体板間に電位差 $V$ を与えたときの導体板間の電界強度 $E_1$, 静電エネルギー $U_1$ および，このとき導体板間に働く静電気力の大きさ $F_1$を, それぞれ $a,b,x,V,\varepsilon_0$ のうち必要なものを用いて表せ。また，静電気力の向きは導体板が引き合う方向か，反発し合う方向かを答えよ。 

③ 図 $1.2$ のように $2$ つの導体板に $\pm Q$ の電荷を与えると一様に電荷が分布した。このときの導体板間の電界強度 $E_2$ と静電エネルギー $U_2$ および，導体板間に働く静電気力の大きさ $F_2$ を，それぞれ $a,b,x,Q,\varepsilon_0$ のうち必要なものを用いて表せ。また，静電気力の向きは導体板が引き合う方向か，反発し合う方向かを答えよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electromagnetism_1_p2.png" width="350" alt=""/>
</figure>

(2) 厚さが無視できる一辺の長さ $a$ の正方形導体板を間隔 $x$ で平行においたコンデンサがある。図 $1.3$ のように，この導体板間に一辺の長さ $a$, 厚さ $d$, 誘電率 $\varepsilon(\varepsilon > \varepsilon_0)$ の正方形誘電体板を導体板に重なる位置で，導体板間の中央に平行に $l(0 < l < a)$ だけ挿入し, このコンデンサの導体板間に電位差 $V$ を与えた。誘電体は帯電していないものとする。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electromagnetism_1_p3.png" width="500" alt=""/>
</figure>

① 図 $1.3$ に示す領域 I と領域 II の部分の静電容量 $C_1$  および $C_{11}$ を，それぞれ $a,d,x,l,\varepsilon_0,\varepsilon$ のうち必要なものを用いて表せ。 

② 誘電体板に働く静電気力の大きさ 
$F_3$ を $a,d,x,l,V,\varepsilon
_0,\varepsilon$ のうち必要なものを用いて表せ。また，その静電気力の向きを図 $1.3$ の右向きか左向きかで答えよ。

## **Kai** 
### (1)
#### ①

$$
\varepsilon_0E = \frac{Q}{ab} \Rightarrow E = \frac{Q}{\varepsilon_0ab} \Rightarrow V = Ex = \frac{Q}{\varepsilon_0ab}x
$$

従って、

$$
C_1 = \frac{Q}{V} = \frac{\varepsilon_0ab}{x}
$$

#### ②
$V = \frac{Q}{\varepsilon_0ab}x$ より、

$$
Q = \frac{\varepsilon_0ab}{x}V
$$

$$
E_1 = \frac{1}{\varepsilon_0ab}\cdot \frac{\varepsilon_0ab}{x}V = \frac{V}{x}
$$

$$
U_1 = \frac{1}{2}C_1V^2 = \frac{1}{2} \cdot \frac{\varepsilon_0ab}{x}V^2
$$

$$
F_1 = \frac{\partial U_1}{\partial x} = -\frac{\varepsilon_0ab}{2x^2}V^2
$$

静電気力の向きは導体板が引き合う方向である。

#### ③

$$
E_2 = \frac{Q}{\varepsilon_0ab}
$$

$$
U_2 = \frac{1}{2} \cdot \frac{Q^2}{C_1} = \frac{1}{2} \cdot \frac{x}{\varepsilon_0ab}Q^2
$$

$$
F_2 = -\frac{\partial U_2}{\partial x} = -\frac{Q^2}{2\varepsilon_0ab}
$$

静電気力の向きは導体板が引き合う方向である。

### (2)
#### ①
領域 I II にそれぞれ $\pm Q_1,\pm Q_2$ の電荷が表れるとすると、

##### (i) 領域 I

$$
\begin{aligned}
\varepsilon_0E_1 &= \frac{Q_1}{a(a - l)} \\
E_1 &= \frac{Q}{\varepsilon_0a(a - l)} \\
V &= xE_1 \\
&= \frac{x}{\varepsilon_0a(a - l)}Q_1
\end{aligned}
$$

従って、

$$
C_I = \frac{Q_1}{V} = \frac{\varepsilon_0a(a - l)}{x}
$$

##### (ii) 領域 II

$$
\varepsilon_0 E_{21} = \frac{Q_2}{al} \Rightarrow E_{21} = \frac{Q_2}{\varepsilon_0al}
$$

$$
V_{21} = E_{21}(x - d) = \frac{Q_2}{\varepsilon_0al}(x - d)
$$

また、境界条件より、

$$
\varepsilon_0E_{21} = \varepsilon E_{22}
$$

$$
E_{22} = \frac{\varepsilon_0}{\varepsilon} \cdot \frac{Q_2}{\varepsilon_0al} = \frac{Q_2}{\varepsilon al}
$$

$$
V_{22} = E_{22}d = \frac{Q_2}{\varepsilon al}d
$$

$$
V = V_{21} + V_{22} = (\frac{x - d}{\varepsilon_0 al} + \frac{d}{\varepsilon al})Q_2 = \frac{Q_2}{al}(\frac{x-d}{\varepsilon_0} + \frac{d}{\varepsilon})
$$

従って、

$$
C_{II} = \frac{Q_2}{V} = \frac{al}{\frac{x-d}{\varepsilon_0} + \frac{d}{\varepsilon}}
$$

#### ②

$$
\begin{aligned}
C &= C_I + C_{II} = \frac{\varepsilon_0a(a - l)}{x} + \frac{al}{\frac{x-d}{\varepsilon_0} + \frac{d}{\varepsilon}}
\end{aligned}
$$

$$
\begin{aligned}
V_3 &= \frac{1}{2}CV^2 = \frac{1}{2} \bigg[\frac{\varepsilon_0a(a - l)}{x} + \frac{al}{\frac{x-d}{\varepsilon_0} + \frac{d}{\varepsilon}}\bigg]V^2
\end{aligned}
$$

$$
\begin{aligned}
F_3 = \frac{\partial U_3}{\partial l} &= \frac{1}{2} \bigg[-\frac{\varepsilon_0a}{x} + \frac{a}{\frac{x-d}{\varepsilon_0} + \frac{d}{\varepsilon}}\bigg]V^2 \\
&= \frac{1}{2} \bigg[-\frac{\varepsilon_0a}{x} + \frac{\varepsilon_0 \varepsilon a}{\varepsilon(x - d) + \varepsilon_0d}\bigg]V^2 \\
&= \frac{1}{2} \bigg[-\frac{\varepsilon_0a}{x} + \frac{\varepsilon_0 \varepsilon a}{d(\varepsilon_0 - \varepsilon) + \varepsilon x}\bigg]V^2 \\
&= \frac{1}{2} \cdot \frac{\varepsilon_0(\varepsilon - \varepsilon_0)da}{x[d\varepsilon_0 + (x - d)\varepsilon]}V^2
\end{aligned}
$$

$F_3 > 0$ より、静電気力の向きは図 $1.3$ の左向きである。