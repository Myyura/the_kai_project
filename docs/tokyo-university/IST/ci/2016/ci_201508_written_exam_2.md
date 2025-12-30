---
sidebar_label: '2015年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Network
  - Graph-Theory
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
点(ノード)と線(エッジ)から構成される小包の配送ネットワークにおける小包の配送経路を、以下のアルゴリズムに従って計算するシステムを考える。

経路計算アルゴリズムP：
各ノードは、各ノードがエッジで接続されているすべての隣接ノードに、\{宛先ノード, 宛先ノードに到達するまでのホップ数, 次に転送されるべき隣接ノード\}を行ベクトルとする経路表を1分ごとに通知する。通知されたノードは、隣接ノードから通知された経路表を使って自身の経路表を再計算する。図1に、ある時点でのノード1の経路表の例を示す。なお、ホップ数$h(i,j)$は、次の計算式にしたがって計算され、自ノード$i$から宛先ノード$j$に到達するために必要な最小ホップ数を示している。

$h(i,j) = \min\{h(i,k) + h(k,j)\}, \quad h(i,i)=0, \quad h(i,k)=1, \quad k$ はノード$i$のすべての隣接ノード

なお、同じコストの経路が存在する時には、ノードの番号がより大きい値を持つ隣接ノードを経由する経路が選択されるものとする。また、各ノードの経路表の初期状態は、自ノード宛の行だけがある表である。

| 宛先ノード | 宛先ノードに到達<br>するまでのホップ数 | 次に転送される<br>べき隣接ノード |
| :---: | :---: | :---: |
| 1 | $h(1,1)=0$ | - |
| 2 | $h(1,2)=3$ | 3 |
| 3 | $h(1,3)=1$ | 3 |
| $\mid$ | $\mid$ | $\mid$ |
| $\mid$ | $\mid$ | $\mid$ |
| 9 | $h(1,9)=6$ | 2 |

図1

(1) 図2の配送ネットワークにおいて、経路表が収束するまでに必要な時間と、収束するまでのノード6の経路表を、1分ごとに示しなさい。なお、図中の○(丸)がノードを表しその中の数字がノード番号を示しているものとする。ノードを接続するエッジは線で示されており、Li ($i$は整数)でエッジを表現している。

(2) 各ノードの経路表の情報から、ノード6を根とする残りのすべてのノード(1,2,3,4,5)への転送経路を示す木(tree)が作成される。この木を図示しなさい。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_2_p1.png" width="500" alt=""/>
</figure>
図2

次に、図2の配送ネットワークにおいて、任意の大きさのデジタルビットの小包(以下、パケット)が配送されるデジタル通信ネットワークを考える。なお、ノード6からノード2へのパケット配送のみが行われる場合を考える。また、L5とL6の2つのエッジが衛星回線(遅延 500[ms]、帯域幅 1[Mbps])、L4とL7が広域地上線(遅延 50[ms]、帯域幅 100[Mbps])、その他のエッジがローカル網線(遅延 1[ms]、帯域幅 1[Gbps])とする。

(3) 8メガビットの大きさのファイルを、ノード6からノード2へ、8キロビットの同じ大きさのパケット1,000個に分割して転送する場合を考える。この際、ノード6は、$i$番目$(1 \leqq i \leqq 1,000)$に転送されるべきパケット$(S_i)$を送出したあと、ノード2がパケット$(S_i)$を受信し、その受信を知らせるパケット$(R_i)$をノード2がノード6に送信し、そのパケット$(R_i)$をノード6が受け取ったら、次のパケット$(S_{i+1})$を送信するものとする。ノード6がファイルの送信を開始して、ノード2が受信を終了するまでのファイルの転送時間$T$を示しなさい。なお、各ノードでのパケットの受信終了から送信開始までの遅延時間、および、各パケットに付加される宛先ノードを示すラベルなど送信されるファイル以外に転送されなければならないデータの転送に必要な時間は、無視可能であり、さらに、パケットは、転送中に紛失・廃棄されることはないものとする。

(4) 設問(3)で示したパケットの転送方法を修正することでノード6からノード2へのファイルの転送時間$T$を小さくすることができる。その具体的な方法を示しなさい。

(5) ノード間で交換される行ベクトルの構成の変更や経路の計算アルゴリズムの変更など、経路計算アルゴリズムPに修正を加えることでノード6からノード2へのファイルの転送時間$T$を小さくすることも可能である。その具体的な方法を、パケットの転送経路がどのように変化するかも示しながら、2つ提案しなさい。

## **Description (English) | AI Translated**

Consider a system that calculates the delivery route of a parcel in a parcel delivery network composed of points (nodes) and lines (edges) according to the following algorithm.

Route Calculation Algorithm P:
Every minute, each node notifies all adjacent nodes connected by edges of a routing table containing \{Destination Node, Number of hops to reach the destination node, Next neighbor node to forward to\} as a row vector. The notified node recalculates its own routing table using the routing tables notified by its adjacent nodes. Figure 1 shows an example of Node 1's routing table at a certain point in time. Note that the number of hops $h(i,j)$ is calculated according to the following formula and indicates the minimum number of hops required to reach the destination node $j$ from its own node $i$.

$h(i,j) = \min\{h(i,k) + h(k,j)\}, \quad h(i,i)=0, \quad h(i,k)=1, \quad k$ is all adjacent nodes of node $i$.

When paths with the same cost exist, the path via the adjacent node with the larger node number is selected. Also, the initial state of the routing table for each node is a table containing only the row for the node itself.

| Destination Node | Hops to reach<br>destination node | Next neighbor node<br>to be forwarded to |
| :---: | :---: | :---: |
| 1 | $h(1,1)=0$ | - |
| 2 | $h(1,2)=3$ | 3 |
| 3 | $h(1,3)=1$ | 3 |
| $\mid$ | $\mid$ | $\mid$ |
| $\mid$ | $\mid$ | $\mid$ |
| 9 | $h(1,9)=6$ | 2 |

Figure 1

(1) In the delivery network of Figure 2, show the time required for the routing tables to converge and the routing table of Node 6 every minute until convergence. Note that the circles in the figure represent nodes, and the numbers inside them indicate the node numbers. Edges connecting nodes are shown as lines, and edges are represented by Li ($i$ is an integer).

(2) Based on the information in the routing table of each node, a tree indicating the forwarding routes to all remaining nodes (1, 2, 3, 4, 5) rooted at Node 6 is created. Illustrate this tree.

Next, consider a digital communication network in the delivery network of Figure 2 where parcels of digital bits of arbitrary size (hereinafter referred to as packets) are delivered. Consider the case where only packet delivery from Node 6 to Node 2 takes place. Also, assume that the two edges L5 and L6 are satellite links (Delay 500 [ms], Bandwidth 1 [Mbps]), L4 and L7 are wide-area terrestrial lines (Delay 50 [ms], Bandwidth 100 [Mbps]), and other edges are local network lines (Delay 1 [ms], Bandwidth 1 [Gbps]).

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_2_p1.png" width="500" alt=""/>
</figure>
Figure 2

(3) Consider a case where a file of 8 Megabits is transferred from Node 6 to Node 2 by dividing it into 1,000 packets of the same size of 8 Kilobits. In this case, after Node 6 sends the $i$-th ($1 \leqq i \leqq 1,000$) packet ($S_i$) to be transferred, Node 2 receives packet ($S_i$), sends a packet ($R_i$) notifying the receipt from Node 2 to Node 6, and upon Node 6 receiving that packet ($R_i$), it transmits the next packet ($S_{i+1}$). Show the file transfer time $T$ from when Node 6 starts transmitting the file until Node 2 finishes receiving it. Note that the delay time from the end of packet reception to the start of transmission at each node, and the time required to transfer data other than the transmitted file, such as labels indicating the destination node attached to each packet, are negligible. Furthermore, assume that packets are not lost or discarded during transfer.

(4) The file transfer time $T$ from Node 6 to Node 2 can be reduced by modifying the packet transfer method shown in question (3). Show the specific method.

(5) It is also possible to reduce the file transfer time $T$ from Node 6 to Node 2 by modifying the route calculation algorithm P, such as changing the configuration of row vectors exchanged between nodes or changing the route calculation algorithm. Propose two specific methods while also showing how the packet transfer route changes.