---
sidebar_label: 2007年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture
  - Computer-Science.Operating-Systems.Process-Synchronization
  - Computer-Science.Operating-Systems.Atomic-Operations
  - Computer-Science.Operating-Systems.Message-Passing-Synchronization
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Synchronization operation among processing elements in a multi-computer is essential to realize mutual exclusion, producer-consumer synchronization. Answer the following questions on realization of synchronization in a multi-computer:

(1) When the multi-computer has a shared memory, describe a method to realize mutual exclusion, then write a pseudo-program to implement the operation.

(2) Atomic operations of memory-read and memory-write are necessary to implement synchronization for mutual exclusion (\*1). “Test and set” or “compare and swap” realizes an atomic operation necessary to implement the synchronization. Describe the reason why an atomic operation of memory-read and memory-write is necessary to implement the synchronization (\*2).

(3) In a distributed-memory multi-computer, synchronization can be realized by message communication. Show that synchronization functions realized by message communication and semaphore are equivalent.

(4) Synchronization methods used in Q1 to Q3 can perform a constant number of synchronization, e.g. number of mutual exclusion operations in a unit time. It is not scalable to the number of processors in the system. Describe the method to realize scalable synchronization where the number of synchronization in a unit time is proportional to the number of processors in the system.
+ (\*1) Implementation of synchronization without atomic operations exists. However, this method is not used for practical purposes.
+ (\*2) If synchronization method to be considered does not use atomic operation, show the outline of synchronization method instead of necessity of atomic operation.

### 题目描述

多计算机系统中的处理单元必须进行同步，才能实现互斥以及生产者—消费者同步。回答以下关于多计算机同步实现的问题。

1. 当多计算机具有共享内存时，说明一种实现互斥的方法，并写出实现该操作的伪程序。
2. 实现互斥同步通常需要把内存读、写组成原子操作，例如“测试并置位”（test-and-set）或“比较并交换”（compare-and-swap）。说明为什么实现同步需要这种原子性的读写操作。题目同时说明：虽然存在不使用原子操作的同步实现，但实践中通常不采用；若你的同步方法不使用原子操作，则改为概述该方法。
3. 在分布式内存多计算机中可通过消息通信实现同步。证明用消息通信实现的同步功能与信号量实现的同步功能等价。
4. 第 1～3 问的方法在单位时间内只能完成常数数量的同步（例如互斥操作次数），因而不能随处理器数量扩展。说明一种可扩展的同步方法，使单位时间内可完成的同步数量与系统处理器数成正比。


## **Kai**

### (1)

共有変数 `locked` を最初 `false` とし、原子的な test-and-set で取得するスピンロックを使う。`test_and_set` は古い値を返すと同時に `true` を書き込む不可分な操作である。

```text
shared atomic locked := false

lock():
    while atomic_test_and_set(locked, acquire) == true:
        pause()

unlock():
    atomic_store(locked, false, release)

lock()
try:
    critical_section()
finally:
    unlock()
```

`false` を読み取ってロックを取得できるのは、直前の解放以降で最初に test-and-set を実行した1台だけである。そのため同時に2台がクリティカルセクションへ入ることはない。acquire/release は保護対象データへのアクセスがロックの外へ再順序化されるのを防ぎ、解放前の書込みを次の取得者へ公開する。待ちが長い場合にはスピンを続けず、待機キューで休眠する実装が適する。この単純なロックだけでは公平性や飢餓防止は保証されない。

### (2)

読出しと書込みが別々なら、次の実行順が可能である。

| 時刻 | プロセッサA | プロセッサB |
|---|---|---|
| 1 | `locked` を読み `false` を得る | |
| 2 | | `locked` を読み `false` を得る |
| 3 | `locked := true`、進入 | |
| 4 | | `locked := true`、進入 |

各ロード・ストアが単独で不可分でも、検査から更新までをまとめなければ2台とも取得したと判断してしまう。test-and-set や compare-and-swap はこの区間を不可分にする。一方、原子的 read-modify-write が「あらゆる互斥アルゴリズムで不可欠」という意味ではない。例えば順序整合的な原子ロード・ストアを仮定した2プロセスの Peterson 法では、各自の参加フラグと優先権変数によって相互進入を防げる。単なる非原子的変数や `volatile` だけで同じ保証が得られるわけではない。

### (3)

メッセージが欠落・重複せずに配送される通信、故障しない参加者、十分なメモリを仮定して、双方を構成する。

**メッセージ通信からセマフォ。** 管理プロセスを1台置き、非負の利用可能数 $s$ とFIFO待機列を保持させる。各要求には送信元と一意な要求番号を付ける。管理プロセスは要求を逐次処理する。

```text
on P(requester, id):
    if s > 0:
        s := s - 1
        send GRANT(id) to requester
    else:
        enqueue(waiters, (requester, id))

on V(requester, id):
    if waiters is not empty:
        (requester, id) := dequeue(waiters)
        send GRANT(id) to requester
    else:
        s := s + 1
    send ACK(id) to requester
```

`P` の呼出し側は対応する `GRANT` を、`V` の呼出し側は `ACK` を受け取るまで待つ。`V` は待機者へ許可を直接渡すか、利用可能数を増やす。許可の総数と待機順序がセマフォの状態遷移に一致し、初期値1なら互斥、初期値0なら通知を表現できる。

**セマフォと共有記憶からメッセージ通信。** 容量 $K$ のFIFOメールボックスに、相互排除用 `mutex=1`、空き数 `empty=K`、メッセージ数 `full=0` のセマフォを設ける。

```text
send(message):
    P(empty); P(mutex)
    queue.push(message)
    V(mutex); V(full)

receive():
    P(full); P(mutex)
    message := queue.pop()
    V(mutex); V(empty)
    return message
```

空なら受信側、満杯なら送信側が待機し、キューを操作できるのは一度に1台だけである。これで信頼できる容量付きメッセージ通信を実現できる。送信者も受信完了まで待つランデブー通信が必要なら、メッセージごとの受領通知を追加する。無限容量の非阻塞送信まで表すには十分な拡張可能記憶が要る。この意味で同期機能を互いに模擬できるが、通信遅延・故障耐性・実装コストが等しいという意味ではない。

### (4)

全要求を1個のロックや1台の管理プロセスへ集中させず、独立な資源ごとにロック・キュー・管理担当を分割する。例えばハッシュ表を $p$ 個のバケット群に分け、各群を別のプロセッサが管理し、その群の要求だけを同期させる。各群への要求量が均等で、1要求の処理コストが一定、通信・記憶帯域も規模に応じて増えるなら、$p$ 群で並列に処理でき、総同期スループットは $\Theta(p)$ となる。

同一群内で競合する場合は、MCS型キューロックのように各待機者が自分の局所フラグで待ち、解放時には次の1台だけを通知する方法を組み合わせる。これにより共有ロック変数への大量のアクセスを抑えられる。[Mellor-Crummey–Scott のアルゴリズム資料](https://www.cs.rochester.edu/research/synchronization/pseudocode/ss.html)でも、局所スピンと待機キューを用いている。

ただし、全プロセッサが**同じ分割不能な資源**を互斥利用する必要があり、1回の占有に $\tau>0$ かかるなら、スループットは $1/\tau$ 以下である。その場合はロック方式の変更だけで $p$ に比例させることはできず、上の線形性には独立な同期対象への分割が前提となる。
