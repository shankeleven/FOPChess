import { Piece, Position } from "../../models";
import { TeamType } from "../../Types";
import {
  tileIsEmptyOrOccupiedByOpponent,
  tileIsOccupied,
} from "./GeneralRules";

export const bishopMove = (
  initialPosition: Position,
  desiredPosition: Position,
  team: TeamType,
  boardState: Piece[]
): boolean => {
  for (let i = 1; i < 8; i++) {
    //Up right movement
    if (
      desiredPosition.x > initialPosition.x &&
      desiredPosition.y > initialPosition.y
    ) {
      let passedPosition = new Position(
        initialPosition.x + i,
        initialPosition.y + i
      );
      //Check if the tile is the destination tile
      if (passedPosition.samePosition(desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        //Dealing with passing tile
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }

    //Bottom right movement
    if (
      desiredPosition.x > initialPosition.x &&
      desiredPosition.y < initialPosition.y
    ) {
      let passedPosition = new Position(
        initialPosition.x + i,
        initialPosition.y - i
      );
      //Check if the tile is the destination tile
      if (passedPosition.samePosition(desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }

    //Bottom left movement
    if (
      desiredPosition.x < initialPosition.x &&
      desiredPosition.y < initialPosition.y
    ) {
      let passedPosition = new Position(
        initialPosition.x - i,
        initialPosition.y - i
      );
      //Check if the tile is the destination tile
      if (passedPosition.samePosition(desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }

    //Top left movement
    if (
      desiredPosition.x < initialPosition.x &&
      desiredPosition.y > initialPosition.y
    ) {
      let passedPosition = new Position(
        initialPosition.x - i,
        initialPosition.y + i
      );
      //Check if the tile is the destination tile
      if (passedPosition.samePosition(desiredPosition)) {
        //Dealing with destination tile
        if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
  }
  return false;
};
