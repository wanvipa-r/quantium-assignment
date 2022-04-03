import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs'


class ItemNode {
  children: BehaviorSubject<ItemNode[]>;
  lastMod: string
  modBy: string
  constructor(public item: string, children?: ItemNode[], lm: string ='') {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
    this.lastMod = (lm);
    this.modBy = (lm);
  }
}
const TREE_DATA = [
  new ItemNode('USD Fund I, L.P.', [
    new ItemNode('Legal', [
      new ItemNode(`Article of assosation.pdf`, [], '2021-01-04'),
      new ItemNode(`Fund formation.pdf`,[], '2021-01-03')
    ]
    )]),
  new ItemNode('Transaction Attachments', [
    new ItemNode('Legal', [
      new ItemNode(`Article of assosation.pdf`),
      new ItemNode(`Fund formation.pdf`)
    ]
    )]),
  new ItemNode('Report', [
    new ItemNode('Legal', [
      new ItemNode(`Article of assosation.pdf`),
      new ItemNode(`Fund formation.pdf`)
    ]
    )])


];

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  recursive: boolean = false;
  levels = new Map<ItemNode, number>();
  treeControl: NestedTreeControl<ItemNode>
  dataSource: MatTreeNestedDataSource<ItemNode>;

  constructor() {
    this.treeControl = new NestedTreeControl<ItemNode>(this.getChildren)
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = TREE_DATA;
  }
  getChildren = (node: ItemNode) => {
    return node.children;
  };

  hasChildren = (index: number, node: ItemNode) => {
    console.log(ItemNode)
    return node.children.value.length > 0;
  }
  ngOnInit(): void {
  }

}
