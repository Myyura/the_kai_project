---
sidebar_label: "2021年8月実施 電気回路2"
tags:
  - TITech
  - Electrical-Circuit
---
# 東京工業大学 工学院 電気電子系 2021年8月実施 電気回路2

:::danger[留学警示（商务部公告2026年第12号）]

根据中华人民共和国商务部公告2026年第12号，东京科学大学（東京科学大学/Institute of Science Tokyo）已被列入关注名单。请中国留学申请者慎重考虑相关风险，在做出留学决定前充分了解相关政策及其可能带来的影响。

:::

## **Author**
Zero

## **Description**
図 $2.1$ に示すインダクタンス $L$ とキャパシタンス $C$ の並列回路に，以下の式で与えられる二つの異なる周波数成分を持つ電圧 $e_1(t)$ を印加する。ただし $t$ は時刻である。電圧，電流の数値の単位は，それぞれ V,A とする。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202108_electrical_circuit_2_p1.png" width="150" alt=""/>
</figure>

$$
e_1(t) = 100\sqrt{2}\sin(500t) + \frac{100\sqrt{2}}{3}\sin(1500t)
$$

$L = 10$ mH,$C = 300\mu$ F として，以下の問に答えよ。なお，数値については小数点以下を四捨五入して整数で答えよ。

重ね合わせの理を用いて電流を求める。まず，$500$ rad/s 成分のみに着目する。 

(1) $500$ rad/s 成分のみの電圧によってインダクタに流れる電流の実効値を求めよ。

(2) 同様にキャパシタに流れる電流の実効値を求めよ。 

(3) 以上の結果から，電源に流れる電流の実効値 $I_1$ を求めよ。 

次に，$1500$ rad/s 成分のみの計算を行う。 

(4) この成分により電源に流れる電流の実効値 $I_3$ を求めよ。 

以上の結果から電源の電流 $i(t)$ の実効値を算出する。周期 $T$ の周期関数 $i(t)$ の実効値 $I_{rms}$ は以下の式で与えられる。 

$$
I_{rms} = \sqrt{\frac{1}{T}\int_0^T i(t)^2dt}
$$

(5) いま，$i(t) = \sqrt{2}I_1\sin(\omega t) + \sqrt{2}I_3\sin(3\omega t)$ とし，$I_{rms}$ を計算し，$I_1$ と $I_3$ を用いて表せ。

(6) $500$ rad/s 成分と $1500$ rad/s 成分両方によって流れる電源の電流の実効値を求めよ。 

次に，図 $2.2$ に示すように以下の式で与えられる電圧 $e_2(t),e_3(t)$ を持つ電源を追加し，さらに，図 $2.1$ と等しい負荷を $Y$ 接続して，$3$ 本の電線で電源に接続する。

$$
\begin{aligned}
e_2(t) &= 100\sqrt{2}\sin(500t + \frac{2\pi}{3}) + \frac{100\sqrt{2}}{3}\sin(100t) \\
e_3(t) &= 100\sqrt{2}\sin(500t + \frac{4\pi}{3}) + \frac{100\sqrt{2}}{3}\sin(100t) \\
\end{aligned}
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202108_electrical_circuit_2_p2.png" width="300" alt=""/>
</figure>

(7) $500$ rad/s 成分の線間電圧の実効値を求めよ。

(8) 電線 $U$ に流れる電流の実効値を求めよ。 

## **Kai** 
### (1)

$$
I_1 = \bigg|\frac{100}{j500 \times 10 \times 10^{-3}}\bigg| = 20[\text{A}]
$$

### (2)

$$
\begin{aligned}
I_c &= \bigg|j\omega C \cdot 100\bigg| \\
&= 500 \cdot 100 \cdot 300 \times 10^{-6} \\
&= 15[\text{A}]
\end{aligned}
$$

### (3)

$$
\begin{aligned}
I_1 &= I_L + I_C \\
&= \bigg|-j20 + j15\bigg| \\
&= \bigg|-j5\bigg| \\
&= 5[\text{A}]
\end{aligned}
$$

### (4)

$$
\begin{aligned}
I_3 &= \bigg|\frac{\frac{100}{3}}{j1500 \times 10 \times 10^{-3}} + j1500 \times 300 \times 10^{-6} \times \frac{100}{3}\bigg| \\
&= \bigg|-j\frac{100}{45} + j15\bigg| \\
&= \bigg|j(-2.2 + 15)\bigg| \\
&\approx 13[\text{A}]
\end{aligned}
$$

### (5)

$$
T = \frac{2\pi}{\omega}
$$

$$
\begin{aligned}
\frac{\omega}{2\pi}\int_0^{\frac{2\pi}{\omega}}\bigg[\sqrt{2}\big(I_1\sin(\omega t) + I_3\sin(3\omega t)\big)\bigg]^2dt
= \frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}} I_1^2 \sin^2\omega t dt + \frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}}I_3^2\sin^23\omega tdt + \frac{2\omega}{\pi}I_1I_2 \int_0^{\frac{2\pi}{\omega}}\sin\omega t \sin(3\omega t)dt 
\end{aligned}
$$

$$
\begin{aligned}
\frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}} I_1^2 \sin^2\omega t dt &= \frac{\omega}{2\pi}I_1^2 \int_0^{\frac{2\pi}{\omega}} (1 - \cos2\omega t) dt \\
&= \frac{\omega}{2\pi}I_1^2\bigg[t - \frac{1}{2\omega}\sin2\omega t\bigg]_0^{\frac{2\pi}{\omega}} \\
&= \frac{\omega I_1^2}{2\pi} \cdot \frac{2\pi}{\omega} = I_1^2
\end{aligned}
$$

$$
\begin{aligned}
\frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}}I_3^2\sin^23\omega tdt &= \frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}}I_3^2\sin^2(3\omega t)dt \\
&= \frac{\omega I_3^2}{2\pi}\int_0^{\frac{2\pi}{\omega}}\bigg(1 - \cos(6\omega t)\bigg)dt \\
&= \frac{\omega I_3^2}{2\pi}\bigg[t + \frac{1}{6\omega}\sin(6\omega t)\bigg]_0^{\frac{2\pi}{\omega}} \\
&= \frac{\omega I_3^2}{2\pi} \cdot \frac{2\pi}{\omega} = I_3^2
\end{aligned}
$$

$$
\begin{aligned}
\frac{2\omega}{\pi}I_1I_2 \int_0^{\frac{2\pi}{\omega}}\sin\omega t \sin(3\omega t)dt &= \frac{2\omega I_1I_2}{\pi}\int_0^{\frac{2\pi}{\omega}}\frac{1}{2}(\cos 2\omega t - \cos 4\omega t)dt \\
&= \frac{\omega I_1I_2}{\pi
}\bigg[\frac{1}{2\omega} \sin 2\omega t - \frac{1}{4\omega}\sin 4\omega t\bigg]_0^{\frac{2\pi}{\omega}} \\
&= 0
\end{aligned}
$$

従って、

$$
I_{rms} = \sqrt{I_1^2 + I_3^2}
$$

### (6)

$$
I = \sqrt{25 + 169} \approx 14[\text{A}]
$$

### (7)
線間電圧は相電圧の $\sqrt{3}$ 倍より、

$$
100\sqrt{3} = 173.2 \cdots \approx 173[\text{V}]
$$

### (8)
$500$ rad/s の成分のみを考慮して、

$$
I_0 = 5[\text{A}]
$$