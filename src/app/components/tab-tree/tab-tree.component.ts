import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';

interface GenreNode {
  title: string;
  children?: GenreNode[];
}


const TREE_DATA: GenreNode[] = [
  {
    title: 'Science Fiction',
    children: [
      { title: 'Fantastic' },
      {
        title: 'Super hero movie', children: [
          { title: 'Marvel' },
          { title: 'DC' }
        ]
      }
    ]
  }, {
    title: 'Action',
    children: [{
      title: 'Kung fu'
    }, {
      title: 'War movie'
    }]
  }
];


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tab-tree',
  templateUrl: './tab-tree.component.html',
  styleUrls: ['./tab-tree.component.scss']
})
export class TabTreeComponent implements OnInit {
  
  ngOnInit(): void {
    
  }




  private _transformer = (node: GenreNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.title,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

