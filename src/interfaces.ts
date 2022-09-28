import { Config } from '@mohitsinghs/markdoc'
import { TextDocument } from 'vscode-languageserver-textdocument'
import {
  ClientCapabilities,
  Connection,
  TextDocuments,
} from 'vscode-languageserver/node'

export interface Symbols {
  tags: string[]
  functions: string[]
  attributes: Record<string, string[]>
}

export interface Server {
  connection: Connection
  config: Config
  documents: TextDocuments<TextDocument>
  capabilities: ClientCapabilities
  symbols: Symbols
}

export enum ErrorType {
  value_missing,
  attribute_or_fn_missing,
  attribute_missing,
  tag_missing,
  unknown_error,
}

export interface CompletionData {
  type: CompletionType
}

export enum CompletionType {
  function,
  tag,
  attribute,
}
