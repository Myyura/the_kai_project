---
sidebar_label: 2021年8月実施 電気回路2
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Circuits.Superposition-Theorem
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Circuits.Three-Phase-Circuit
---
# 東京工業大学 工学院 電気電子系 2021年8月実施 電気回路2


## **Author**
Zero

## **Description**
図 $2.1$ に示すインダクタンス $L$ とキャパシタンス $C$ の並列回路に，以下の式で与えられる二つの異なる周波数成分を持つ電圧 $e_1(t)$ を印加する。ただし $t$ は時刻である。電圧，電流の数値の単位は，それぞれ V,A とする。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/institute-of-science-tokyo/engineering/ee_202108_electrical_circuit_2_p1.png" width="150" alt=""/>
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
e_2(t) &= 100\sqrt{2}\sin(500t + \frac{2\pi}{3}) + \frac{100\sqrt{2}}{3}\sin(1500t) \\
e_3(t) &= 100\sqrt{2}\sin(500t + \frac{4\pi}{3}) + \frac{100\sqrt{2}}{3}\sin(1500t) \\
\end{aligned}
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/institute-of-science-tokyo/engineering/ee_202108_electrical_circuit_2_p2.png" width="300" alt=""/>
</figure>

(7) $500$ rad/s 成分の線間電圧の実効値を求めよ。

(8) 電線 $U$ に流れる電流の実効値を求めよ。 

[公式問題 PDF・8ページ](https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=exam_ee_20218&key=cd5c2ecd3d4dc49c5c29e8de8374f19b.pdf&pageId=3186&prevId=&type=1)

### 题目描述

如原 Description 图 2.1，把含两个不同频率分量的电压

$$
e_1(t)
=100\sqrt2\sin(500t)
+\frac{100\sqrt2}{3}\sin(1500t)
$$

加在电感 $L$ 与电容 $C$ 的并联负载上。取

$$
L=10\ \mathrm{mH},\qquad C=300\ \mu\mathrm F.
$$

电压、电流数值单位分别为 V、A；所有数值答案均对小数部分四舍五入取整数。使用叠加原理，先只看 $500\ \mathrm{rad/s}$ 分量：

1. 求该电压分量在电感中产生的电流有效值。
2. 求该电压分量在电容中产生的电流有效值。
3. 由前两问求电源电流的有效值 $I_1$。

再只看 $1500\ \mathrm{rad/s}$ 分量：

4. 求该分量对应的电源电流有效值 $I_3$。

周期为 $T$ 的电流 $i(t)$ 的有效值定义为

$$
I_{\mathrm{rms}}
=\sqrt{\frac1T\int_0^T i(t)^2\,\mathrm dt}.
$$

5. 对

   $$
   i(t)=\sqrt2I_1\sin(\omega t)
   +\sqrt2I_3\sin(3\omega t),
   $$

   计算 $I_{\mathrm{rms}}$，用 $I_1,I_3$ 表示。
6. 求 $500$ 与 $1500\ \mathrm{rad/s}$ 两个分量同时作用时的电源电流有效值。

接着如图 2.2 增加另两相电源

$$
\begin{aligned}
e_2(t)
&=100\sqrt2\sin\left(500t+\frac{2\pi}{3}\right)
+\frac{100\sqrt2}{3}\sin(1500t),\\
e_3(t)
&=100\sqrt2\sin\left(500t+\frac{4\pi}{3}\right)
+\frac{100\sqrt2}{3}\sin(1500t),
\end{aligned}
$$

并把三个与图 2.1 相同的负载作 Y 形连接，用三根导线接到电源；接线和导线 U 的位置以图 2.2 为准。

7. 求 $500\ \mathrm{rad/s}$ 分量的线电压有效值。
8. 求导线 U 中电流的有效值。

## **Kai**

定常交流を考え、各周波数の電圧を位相の基準とする。

### (1)

$$
\boxed{I_L=\frac{100}{500\times10^{-2}}=20\ \mathrm A}.
$$

### (2)

$$
\boxed{I_C=500\times300\times10^{-6}\times100=15\ \mathrm A}.
$$

### (3)

インダクタ電流は電圧より $\pi/2$ 遅れ、キャパシタ電流は $\pi/2$ 進む。したがって、実効値のフェーザを加えると

$$
\underline I_1=-j20+j15=-j5\ \mathrm A,
\qquad \boxed{I_1=5\ \mathrm A}.
$$

### (4)

第3高調波の電圧実効値は $100/3\ \mathrm V$ なので、

$$
\underline I_3=\left(\frac{1}{j1500L}+j1500C\right)\frac{100}{3}
=j\left(15-\frac{20}{9}\right)
=j\frac{115}{9}\ \mathrm A.
$$

よって $I_3=115/9\ \mathrm A$、四捨五入した答は $\boxed{13\ \mathrm A}$。

### (5)

$T=2\pi/\omega$ にわたり異なる高調波は直交するため、

$$
\frac{1}{T}\int_0^T\sin\omega t\sin3\omega t\,\mathrm dt=0,
\qquad
\frac{1}{T}\int_0^T\sin^2(n\omega t)\,\mathrm dt=\frac12
\quad(n=1,3).
$$

したがって、

$$
\boxed{I_{\mathrm{rms}}=\sqrt{I_1^2+I_3^2}}.
$$

### (6)

異なる周波数間の位相によらず (5) の関係が成り立つ。丸める前の値を用いて

$$
I_{\mathrm{rms}}=\sqrt{5^2+\left(\frac{115}{9}\right)^2}
=\frac{\sqrt{15250}}{9}\ \mathrm A.
$$

四捨五入した答は $\boxed{14\ \mathrm A}$。

### (7)

対称三相の線間電圧の実効値は相電圧の $\sqrt3$ 倍なので、

$$
V_{\mathrm{line}}=100\sqrt3\ \mathrm V
\quad\Longrightarrow\quad\boxed{173\ \mathrm V}.
$$

### (8)

負荷中性点は電源中性点に接続されていない。三相の負荷が等しいため、定常状態の負荷中性点電位は

$$
v_N(t)=\frac{e_1(t)+e_2(t)+e_3(t)}{3}
=\frac{100\sqrt2}{3}\sin1500t.
$$

したがって、U 相の負荷電圧は

$$
e_1(t)-v_N(t)=100\sqrt2\sin500t.
$$

同相の第3高調波は負荷に加わらず、電線 U には基本波電流のみが流れる。(3) より

$$
\boxed{I_U=5\ \mathrm A}.
$$

## **Reference**

- [東京工業大学公式問題：2022年度・2021年実施、電気回路2、PDF 8ページ](https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=exam_ee_20218&key=cd5c2ecd3d4dc49c5c29e8de8374f19b.pdf&pageId=3186&prevId=&type=1)
- [院試パイン：東工大2022年の電気回路解答（無料公開部分）](https://note.com/inshi_pineapple/n/n80ea77a60609)
